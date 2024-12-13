/**
 * Options for configuring the NekoLogging middleware.
 * Allows customizing log details, format, and behavior.
 */
export interface NekoLoggingOptions {
    /** Whether to log the timestamp of the request. */
    logTime?: boolean;

    /** Whether to log the HTTP method of the request. */
    logMethod?: boolean;

    /** Whether to log the requested URL. */
    logUrl?: boolean;

    /** Whether to log the HTTP status code of the response. */
    logStatus?: boolean;

    /** Whether to log the response time in milliseconds. */
    logResponseTime?: boolean;

    /**
     * Custom format function for log messages.
     * @param log - The log data to format.
     * @returns A formatted string for the log message.
     */
    customFormat?: (log: LogData) => string;

    /**
     * Routes to ignore when logging.
     * Requests matching these routes will not be logged.
     */
    ignoreRoutes?: string[];

    /**
     * Custom transport for sending log data.
     * Allows integration with external logging systems.
     * @param data - The raw log data.
     * @param formattedMessage - The formatted log message.
     */
    customTransport?: (data: LogData, formattedMessage: string) => Promise<void>;

    /**
     * Whether to enable URL caching for logs.
     * If enabled, previously logged URLs will not be logged again.
     */
    logCache?: boolean;
}

/**
 * Data structure representing log information for a request.
 */
export interface LogData {
    /** The HTTP method of the request (e.g., GET, POST). */
    method: string;

    /** The requested URL. */
    url: string;

    /** The HTTP status code of the response. */
    statusCode: number;

    /** The time taken to respond to the request, in milliseconds. */
    responseTime: number;

    /** The timestamp when the log was generated. */
    timestamp: string;
}