#!/usr/bin/env zx
import 'zx/globals'

import chalk from 'chalk'
import { config as SetupDotenv } from 'dotenv'
import fs from 'fs'
import path from 'path'
import { exit } from 'process'
import { spinner } from 'zx'

/** ############################## DEFINE ATTRIBUTES ############################## */

SetupDotenv()
const enter = () => console.log('\n')
const scriptName = chalk.cyan('[ Build SDK ] ')

/** ############################## DEFINE FUNCTIONS ############################## */

async function setTypeModuleAndUpdateTsConfig(name) {
    const pkgPath = path.join(__dirname, '..', 'packages', name, 'package.json')
    const tsconfigPath = path.join(__dirname, '..', 'packages', name, 'tsconfig.json')

    if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
        pkg.type = 'module'
        pkg.files = ['dist', 'dist/esm']
        delete pkg.repository // Remove existing repository field if any
        pkg.exports = {
            '.': {
                import: './dist/esm/index.js',
                require: './dist/index.js'
            },
            './models/*': {
                import: './dist/esm/models/*.js',
                require: './dist/models/*.js'
            },
            './api/*': {
                import: './dist/esm/api/*.js',
                require: './dist/api/*.js'
            }
        }

        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))

        console.info(
            scriptName,
            `${chalk.green('✓')} ${chalk.white('Added "type": "module" and "files": ["dist"] to package.json')}`
        )
    } else {
        console.error(scriptName, chalk.red('package.json not found'))
        exit(1)
    }

    if (fs.existsSync(tsconfigPath)) {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'))

        tsconfig.compilerOptions = tsconfig.compilerOptions || {}
        tsconfig.compilerOptions.module = 'ESNext'

        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2))

        console.info(scriptName, `${chalk.green('✓')} ${chalk.white('Modified module in tsconfig.json')}`)
    } else {
        console.error(scriptName, chalk.red('tsconfig.json not found'))
        exit(1)
    }
}

/** ################################# SCRIPT ################################## */

try {
    enter()
    console.info(scriptName, chalk.white('Removing previous SDK...'))
    await spinner(chalk.gray('Waiting please...'), () => $`pnpm rimraf packages`)

    console.info(scriptName, chalk.white('Generating husqvarna-authentication-sdk...'))
    await spinner(
        chalk.gray('Waiting please...'),
        () => $`openapi-generator-cli generate --generator-key husqvarna-authentication-sdk`
    )

    console.info(scriptName, chalk.white('Post generation set module...'))
    await spinner(chalk.gray('Waiting please...'), () => setTypeModuleAndUpdateTsConfig('husqvarna-authentication-sdk'))
    console.info(scriptName, chalk.white('Installing dependencies and building...'))
    await spinner(
        chalk.gray('Waiting please...'),
        () => $`cd packages/husqvarna-authentication-sdk && pnpm install && pnpm build`
    )

    enter()
    console.info(scriptName, chalk.white('Generating automower-connect-sdk...'))
    await spinner(
        chalk.gray('Waiting please...'),
        () => $`openapi-generator-cli generate --generator-key automower-connect-sdk`
    )
    console.info(scriptName, chalk.white('Post generation set module...'))
    await spinner(chalk.gray('Waiting please...'), () => setTypeModuleAndUpdateTsConfig('automower-connect-sdk'))

    console.info(scriptName, chalk.white('Installing dependencies and building...'))
    await spinner(
        chalk.gray('Waiting please...'),
        () => $`cd packages/automower-connect-sdk && pnpm install && pnpm build`
    )

    enter()
    console.info(scriptName, chalk.white('Generating husqvarna-connectivity-sdk...'))
    await spinner(
        chalk.gray('Waiting please...'),
        () => $`openapi-generator-cli generate --generator-key husqvarna-connectivity-sdk`
    )
    console.info(scriptName, chalk.white('Post generation set module...'))
    await spinner(chalk.gray('Waiting please...'), () => setTypeModuleAndUpdateTsConfig('husqvarna-connectivity-sdk'))

    console.info(scriptName, chalk.white('Installing dependencies and building...'))
    await spinner(
        chalk.gray('Waiting please...'),
        () => $`cd packages/husqvarna-connectivity-sdk && pnpm install && pnpm build`
    )
} catch (e) {
    console.info(chalk.red(`[ Build SDK ] Error: ${e}`))
}
