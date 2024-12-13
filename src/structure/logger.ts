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
    ignoreRoutes: [],
    customTransport: undefined,
    logCache: false
};

/**
 * Logging middleware for Express.
 * Logs request method, URL, status code, response time, and optionally caches URLs.
 * If logCache is true, already logged URLs are cached and won't be logged again.
 */
export function NekoLogging(options: NekoLoggingOptions = {}) {
    const config = { ...defaultOptions, ...options };
    const urlCache: Set<string> = new Set();
    
    return async function (req: Request, res: Response, next: NextFunction) {
        if (config.logCache && urlCache.has(req.originalUrl)) {
            return next();
        }

        if (config.ignoreRoutes?.includes(req.originalUrl)) {
            return next();
        }

        const startTime = Date.now();

        res.on("finish", async () => {
            const responseTime = Date.now() - startTime;
            const logData: LogData = {
                method: req.method,
                url: req.originalUrl,
                statusCode: res.statusCode,
                responseTime,
                timestamp: getCurrentTimestamp()
            };

            if (config.logCache) {
                urlCache.add(req.originalUrl);
            }

            const logMessage = config.customFormat ? config.customFormat(logData) : formatLog(logData, config);

            Logger.info(null, logMessage);

            if (config.customTransport) {
                try {
                    await config.customTransport(logData, logMessage);
                } catch (error) {
                    Logger.error("TRANSPORT", `Failed to send log to custom transport: ${error}`)
                }
            }
        });

        next();
    };
}