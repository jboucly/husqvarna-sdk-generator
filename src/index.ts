/*
 *  Example of usage of the generated SDKs
 */
import 'dotenv/config';

import chalk from 'chalk';
import { OAuth2Api, Oauth2TokenPostGrantTypeEnum } from 'husqvarna-authentication-sdk';
import { Configuration, MowerApi } from '../packages/automower-connect-sdk';
import { DefaultApi as HusqvarnaConnectivityApi } from '../packages/husqvarna-connectivity-sdk';

const main = async () => {
    // Authenticate with the Husqvarna Authentication API
    const apiAuth = new OAuth2Api();

    const tokenReponse = await apiAuth.oauth2TokenPost({
        clientId: process.env.HUSQVARNA_CLIENT_ID || '',
        clientSecret: process.env.HUSQVARNA_CLIENT_SECRET || '',
        grantType: Oauth2TokenPostGrantTypeEnum.CLIENT_CREDENTIALS
    });

    console.info(chalk.blue('Access Token :'), tokenReponse.data.access_token);

    // Use the Automower Connect API

    const apiMower = new MowerApi(
        new Configuration({
            apiKey: process.env.HUSQVARNA_CLIENT_ID || '',
            baseOptions: {
                headers: {
                    'Authorization-Provider': 'husqvarna',
                    Authorization: `Bearer ${tokenReponse.data.access_token}`
                }
            }
        })
    );

    const mowers = await apiMower.mowersGet();
    const mowerId = mowers.data?.data?.at(0)?.id;
    console.info(chalk.blue('Mower ID :'), mowerId);

    if (mowerId) {
        const mower = await apiMower.mowersIdGet({
            id: mowerId
        });

        console.info(chalk.blue('State of the mower :'), mower.data.data?.attributes?.mower.state);

        // Use the Husqvarna Connectivity API
        const apiHusqvarna = new HusqvarnaConnectivityApi(
            new Configuration({
                accessToken: tokenReponse.data.access_token,
                apiKey: process.env.HUSQVARNA_CLIENT_ID || '',
                baseOptions: {
                    headers: {
                        Authorization: `Bearer ${tokenReponse.data.access_token}`
                    }
                }
            })
        );

        const mowerInfo = await apiHusqvarna.devicesIdFullGet({
            id: mowerId
        });

        console.info(chalk.blue('Mower Info :'), mowerInfo.data);
    }
};

main();
