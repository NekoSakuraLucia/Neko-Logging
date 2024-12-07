import chalk from "chalk";

/**
 * Logging Level Handler
 */
export class Logger {
    static info(message: string) {
        console.log(chalk.white(`[${chalk.cyanBright("INFO")}] ${message}`));
    }

    static warn(message: string) {
        console.warn(chalk.white(`[${chalk.yellowBright("WARN")}] ${message}`));
    }

    static error(message: string) {
        console.error(chalk.white(`[${chalk.red("ERROR")}] ${message}`));
    }

    static debug(message: string) {
        console.debug(chalk.white(`[${chalk.magentaBright("DEBUG")}] ${message}`));
    }
}