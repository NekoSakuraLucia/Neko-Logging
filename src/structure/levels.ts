import chalk from "chalk";

/**
 * Logging Level Handler
 */
export class Logger {
  /**
   * Log informational message with optional prefix
   * @param prefix Custom prefix for the log
   * @param message Log message
   */
  static info(prefix: string | null, message: string) {
    console.log(
      `${Logger.formatPrefix(prefix)}${chalk.white(`[${chalk.cyanBright("INFO")}]`)} ${message}`
    );
  }

  /**
   * Log warning message with optional prefix
   * @param prefix Custom prefix for the log
   * @param message Log message
   */
  static warn(prefix: string | null, message: string) {
    console.warn(
      `${Logger.formatPrefix(prefix)}${chalk.white(`[${chalk.yellowBright("WARN")}]`)} ${message}`
    );
  }

  /**
   * Log error message with optional prefix
   * @param prefix Custom prefix for the log
   * @param message Log message
   */
  static error(prefix: string | null, message: string) {
    console.error(
      `${Logger.formatPrefix(prefix)}${chalk.white(`[${chalk.red("ERROR")}]`)} ${message}`
    );
  }

  /**
   * Log debugging message with optional prefix
   * @param prefix Custom prefix for the log
   * @param message Log message
   */
  static debug(prefix: string | null, message: string) {
    console.debug(
      `${Logger.formatPrefix(prefix)}${chalk.white(`[${chalk.magentaBright("DEBUG")}]`)} ${message}`
    );
  }

  /**
   * Format prefix for log messages
   * @param prefix Custom prefix for the log
   * @returns Formatted prefix string
   */
  private static formatPrefix(prefix: string | null): string {
    return prefix ? `[${prefix}] ` : "";
  }
}
