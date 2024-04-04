var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.logMessage = function (message) {
        var timeStamp = new Date();
        console.log("[".concat(timeStamp.toLocaleString(), "]- ").concat(message));
    };
    return Logger;
}());
var logger1 = Logger.getInstance();
logger1.logMessage("This is the first Message");
var logger2 = Logger.getInstance();
logger2.logMessage("This is second Message");
