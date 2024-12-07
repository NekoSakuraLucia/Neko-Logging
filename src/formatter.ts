import chalk from "chalk";
import { LogData, NekoLoggingOptions } from "./types";

export function formatLog(log: LogData, config: NekoLoggingOptions): string {
    const parts: string[] = [];

    if (config.logTime) {
        parts.push(chalk.gray(`[${log.timestamp}]`));
    }

    if (config.logMethod) {
        parts.push(chalk.greenBright(log.method));
    }

    if (config.logUrl) {
        parts.push(chalk.magentaBright(log.url));
    }

    if (config.logStatus) {
        const statusColor =
            log.statusCode >= 500
                ? chalk.red
                : log.statusCode >= 400
                    ? chalk.yellow
                    : log.statusCode >= 300
                        ? chalk.cyan
                        : chalk.green;
        parts.push(statusColor(log.statusCode.toString()));
    }

    if (config.logResponseTime) {
        parts.push(chalk.gray(`${log.responseTime}ms`));
    }

    return parts.join(" ");
}
