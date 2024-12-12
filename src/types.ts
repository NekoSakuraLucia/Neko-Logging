export interface NekoLoggingOptions {
    logTime?: boolean;
    logMethod?: boolean;
    logUrl?: boolean;
    logStatus?: boolean;
    logResponseTime?: boolean;
    customFormat?: (log: LogData) => string;
    ignoreRoutes?: string[];
}

export interface LogData {
    method: string;
    url: string;
    statusCode: number;
    responseTime: number;
    timestamp: string;
}