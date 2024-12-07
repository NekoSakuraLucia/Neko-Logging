import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

/**
 * Logging middleware for Express.
 * Logs request method, URL, status code, and response time.
 */
export function NekoLogging() {
    return function (req: Request, res: Response, next: NextFunction) {
        const startTime = Date.now();

        res.on("finish", () => {
            const responseTime = Date.now() - startTime;
            const statusColor =
                res.statusCode >= 500
                    ? chalk.red
                    : res.statusCode >= 400
                        ? chalk.yellow
                        : res.statusCode >= 300
                            ? chalk.cyan : chalk.green;

            console.log(
                `${chalk.gray(`[${new Date().toISOString()}]`)} ` +
                `${chalk.blue(req.method)} ${chalk.magenta(req.url)} ` +
                `${statusColor(res.statusCode.toString())} ` +
                `${chalk.gray(`${responseTime}ms`)}`
            );
        });

        next();
    };
}