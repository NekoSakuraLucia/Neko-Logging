import { Request, Response, NextFunction } from "express";

import { LogData, NekoLoggingOptions } from "./types";
import { getCurrentTimestamp } from "./utils";
import { formatLog } from "./formatter";
import { Logger } from "./levels";

const defaultOptions: NekoLoggingOptions = {
    logTime: true,
    logMethod: true,
    logUrl: true,
    logStatus: true,
    logResponseTime: true,
    ignoreRoutes: []
};

/**
 * Logging middleware for Express.
 * Logs request method, URL, status code, and response time.
 */
export function NekoLogging(options: NekoLoggingOptions = {}) {
    const config = { ...defaultOptions, ...options };
    return function (req: Request, res: Response, next: NextFunction) {
        if (config.ignoreRoutes?.includes(req.originalUrl)) {
            return next();
        }

        const startTime = Date.now();

        res.on("finish", () => {
            const responseTime = Date.now() - startTime;
            const logData: LogData = {
                method: req.method,
                url: req.originalUrl,
                statusCode: res.statusCode,
                responseTime,
                timestamp: getCurrentTimestamp()
            };

            const logMessage = config.customFormat ? config.customFormat(logData) : formatLog(logData, config);

            Logger.info(null, logMessage);
        });

        next();
    };
}