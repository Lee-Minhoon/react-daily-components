export var TIME_TYPE;
(function (TIME_TYPE) {
    TIME_TYPE["AM"] = "AM";
    TIME_TYPE["PM"] = "PM";
})(TIME_TYPE || (TIME_TYPE = {}));
export var HOURS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var HOUR;
(function (HOUR) {
    HOUR[HOUR["ONE_DAY"] = 24] = "ONE_DAY";
    HOUR[HOUR["HALF_DAY"] = 12] = "HALF_DAY";
})(HOUR || (HOUR = {}));
var MIN;
(function (MIN) {
    MIN[MIN["ONE_DAY"] = 1440] = "ONE_DAY";
    MIN[MIN["HOUR"] = 60] = "HOUR";
})(MIN || (MIN = {}));
var SECONDS;
(function (SECONDS) {
    SECONDS[SECONDS["ONE_DAY"] = 86400] = "ONE_DAY";
    SECONDS[SECONDS["HOUR"] = 3600] = "HOUR";
    SECONDS[SECONDS["MIN"] = 60] = "MIN";
})(SECONDS || (SECONDS = {}));
var Time = /** @class */ (function () {
    function Time(params) {
        var _a, _b, _c;
        Object.defineProperty(this, "hour", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "min", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "seconds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hour = (_a = ((params === null || params === void 0 ? void 0 : params.hour) === 24 ? 0 : params === null || params === void 0 ? void 0 : params.hour)) !== null && _a !== void 0 ? _a : 0;
        this.min = (_b = params === null || params === void 0 ? void 0 : params.min) !== null && _b !== void 0 ? _b : 0;
        this.seconds = (_c = params === null || params === void 0 ? void 0 : params.seconds) !== null && _c !== void 0 ? _c : 0;
    }
    Object.defineProperty(Time, "string", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (time) {
            var splits = time.split(":");
            var hour = +splits[0];
            var min = +splits[0];
            var seconds = +splits[0];
            return new Time({ hour: hour, min: min, seconds: seconds });
        }
    });
    Object.defineProperty(Time, "hourPassed", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (hourPassed) {
            var hour = hourPassed;
            var min = 0;
            var seconds = 0;
            return new Time({ hour: hour, min: min, seconds: seconds });
        }
    });
    Object.defineProperty(Time, "minPassed", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (minPassed) {
            var hour = Math.floor(minPassed / MIN.HOUR);
            var min = minPassed % MIN.HOUR;
            var seconds = 0;
            return new Time({ hour: hour, min: min, seconds: seconds });
        }
    });
    Object.defineProperty(Time, "secondsPassed", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (secondsPassed) {
            var hour = Math.floor(secondsPassed / SECONDS.HOUR);
            var min = Math.floor((secondsPassed % SECONDS.HOUR) / SECONDS.MIN);
            var seconds = (secondsPassed % SECONDS.HOUR) % SECONDS.MIN;
            return new Time({ hour: hour, min: min, seconds: seconds });
        }
    });
    Object.defineProperty(Time.prototype, "getTimeType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.getHour24() < 12 ? TIME_TYPE.AM : TIME_TYPE.PM;
        }
    });
    Object.defineProperty(Time.prototype, "getHour24", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return Math.floor(this.hour % HOUR.ONE_DAY);
        }
    });
    Object.defineProperty(Time.prototype, "getHour12", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var hour = Math.floor(this.getHour24() % HOUR.HALF_DAY);
            return hour === 0 ? 12 : hour;
        }
    });
    Object.defineProperty(Time.prototype, "getMin", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return Math.floor(this.min);
        }
    });
    Object.defineProperty(Time.prototype, "getSeconds", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return Math.floor(this.seconds);
        }
    });
    Object.defineProperty(Time.prototype, "setHour", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (hour) {
            this.hour = hour;
        }
    });
    Object.defineProperty(Time.prototype, "setMin", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (min) {
            this.min = min;
        }
    });
    Object.defineProperty(Time.prototype, "setSeconds", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (seconds) {
            this.seconds = seconds;
        }
    });
    Object.defineProperty(Time.prototype, "getHourPassed", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return (this.getHour24() +
                this.getMin() / MIN.HOUR +
                this.getSeconds() / SECONDS.HOUR);
        }
    });
    Object.defineProperty(Time.prototype, "getMinPassed", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return (this.getHour24() * MIN.HOUR +
                this.getMin() +
                this.getSeconds() / SECONDS.MIN);
        }
    });
    Object.defineProperty(Time.prototype, "getSecondsPassed", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return (this.getHour24() * SECONDS.HOUR +
                this.getMin() * SECONDS.MIN +
                this.getSeconds());
        }
    });
    Object.defineProperty(Time.prototype, "plus", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var hour = _a.hour, min = _a.min, seconds = _a.seconds;
            var secondsPassed = this.getSecondsPassed();
            var total = ((hour !== null && hour !== void 0 ? hour : 0) * SECONDS.HOUR + (min !== null && min !== void 0 ? min : 0) * SECONDS.MIN + (seconds !== null && seconds !== void 0 ? seconds : 0)) %
                SECONDS.ONE_DAY;
            var newHour = Math.floor(total / SECONDS.HOUR);
            var newMin = Math.floor((total % SECONDS.HOUR) / SECONDS.MIN);
            var newSeconds = (total % SECONDS.HOUR) % SECONDS.MIN;
            this.setHour(newHour);
            this.setMin(newMin);
            this.setSeconds(newSeconds);
        }
    });
    Object.defineProperty(Time.prototype, "getString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var isPrintTimeType = _a.isPrintTimeType, isPrintHour = _a.isPrintHour, isPrintMin = _a.isPrintMin, isPrintSeconds = _a.isPrintSeconds;
            var timeType = isPrintTimeType ? "".concat(this.getTimeType()) : "";
            var hour = isPrintHour
                ? "".concat(isPrintTimeType ? " " : "").concat(this.getTwoDigit(this.getHour12()))
                : "";
            var min = isPrintMin
                ? "".concat(isPrintHour ? ":" : "").concat(this.getTwoDigit(this.getMin()))
                : "";
            var seconds = isPrintSeconds
                ? "".concat(isPrintMin ? ":" : isPrintHour ? ":" : "").concat(this.getTwoDigit(this.getSeconds()))
                : "";
            return "".concat(timeType).concat(hour).concat(min).concat(seconds);
        }
    });
    Object.defineProperty(Time.prototype, "getString24Hour", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var isPrintHour = _a.isPrintHour, isPrintMin = _a.isPrintMin, isPrintSeconds = _a.isPrintSeconds;
            var hour = isPrintHour ? "".concat(this.getTwoDigit(this.getHour24())) : "";
            var min = isPrintMin
                ? "".concat(isPrintHour ? ":" : "").concat(this.getTwoDigit(this.getMin()))
                : "";
            var seconds = isPrintSeconds
                ? "".concat(isPrintMin ? ":" : isPrintHour ? ":" : "").concat(this.getTwoDigit(this.getSeconds()))
                : "";
            return "".concat(hour).concat(min).concat(seconds);
        }
    });
    Object.defineProperty(Time.prototype, "getTwoDigit", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (input) {
            return input < 10 ? "0".concat(input) : "".concat(input);
        }
    });
    return Time;
}());
export { Time };
