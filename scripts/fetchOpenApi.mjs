const fs = require("fs");
const https = require("https");

require("dotenv").config();

const scriptName = chalk.cyan("[ Fetch OpenAPI ] ");
const API_URL = process.env.API_URL || "http://localhost:3333";
const OPENAPI_PATH = "/swagger.yml";

function fetchOpenApiSpec() {
    https
        .get(`${API_URL}${OPENAPI_PATH}`, (res) => {
            let data = "";

            res.on("data", (chunk) => (data += chunk));

            res.on("end", () => {
                fs.writeFileSync("openapi.yml", data);

                console.info(
                    scriptName,
                    chalk.white("OpenAPI spec saved to openapi.yml")
                );
            });
        })
        .on("error", (err) => {
            console.error(
                scriptName,
                chalk.red("Error fetching OpenAPI spec :"),
                err
            );
        });
}

console.info(scriptName, chalk.white("Fetching OpenAPI spec..."));
await spinner(chalk.gray("Waiting please..."), () => fetchOpenApiSpec());
