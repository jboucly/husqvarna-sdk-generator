const fs = require('fs');
const https = require('https');

require('dotenv').config();

const scriptName = chalk.cyan('[ Fetch OpenAPI ] ');

const AUTH_API_URL = `${process.env.AUTH_API_URL}`;
const CONNECT_API_URL = `${process.env.CONNECT_API_URL}`;
const AUTO_MOWER_API_URL = `${process.env.AUTO_MOWER_API_URL}`;

function fetchOpenApiSpec(url, outputPath) {
    https
        .get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => (data += chunk));

            res.on('end', () => {
                // Ensure the directory exists
                const dir = require('path').dirname(outputPath);

                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                fs.writeFileSync(outputPath, data);

                console.info(scriptName, chalk.white(`OpenAPI spec saved to ${outputPath}`));
            });
        })
        .on('error', (err) => {
            console.error(scriptName, chalk.red('Error fetching OpenAPI spec :'), err);
        });
}

console.info(scriptName, chalk.white('Remove old OpenAPI specs...'));
await spinner(chalk.gray('Waiting please...'), () => $`pnpm rimraf openApi`);

console.info(scriptName, chalk.white('Fetching OpenAPI spec...'));
await spinner(chalk.gray('Waiting please...'), () =>
    fetchOpenApiSpec(AUTH_API_URL, 'openApi/husqvarna-authentication.yml')
);
await spinner(chalk.gray('Waiting please...'), () =>
    fetchOpenApiSpec(CONNECT_API_URL, 'openApi/husqvarna-connectivity.yml')
);
await spinner(chalk.gray('Waiting please...'), () =>
    fetchOpenApiSpec(AUTO_MOWER_API_URL, 'openApi/automower-connect.yml')
);
