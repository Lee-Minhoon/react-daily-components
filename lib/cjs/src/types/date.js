"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalendarDate = exports.Date = exports.DATE_FORMAT = exports.WEEK_DAY_KOREAN = exports.WEEK_DAY_ABBR = exports.WEEK_DAY = void 0;
var luxon_1 = require("luxon");
exports.WEEK_DAY = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
];
exports.WEEK_DAY_ABBR = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
exports.WEEK_DAY_KOREAN = ["월", "화", "수", "목", "금", "토", "일"];
var DATE_FORMAT;
(function (DATE_FORMAT) {
    DATE_FORMAT["KOREAN"] = "KOREAN";
    DATE_FORMAT["DASH"] = "DASH";
    DATE_FORMAT["DOT"] = "DOT";
})(DATE_FORMAT = exports.DATE_FORMAT || (exports.DATE_FORMAT = {}));
var Date = /** @class */ (function () {
    function Date(params) {
        var _a, _b, _c, _d, _e;
        Object.defineProperty(this, "year", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "month", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "day", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "weekday", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "weekNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.year = (_a = params === null || params === void 0 ? void 0 : params.year) !== null && _a !== void 0 ? _a : luxon_1.DateTime.now().year;
        this.month = (_b = params === null || params === void 0 ? void 0 : params.month) !== null && _b !== void 0 ? _b : luxon_1.DateTime.now().month;
        this.day = (_c = params === null || params === void 0 ? void 0 : params.day) !== null && _c !== void 0 ? _c : luxon_1.DateTime.now().day;
        this.weekday = (_d = params === null || params === void 0 ? void 0 : params.weekday) !== null && _d !== void 0 ? _d : luxon_1.DateTime.now().weekday;
        this.weekNumber = (_e = params === null || params === void 0 ? void 0 : params.weekNumber) !== null && _e !== void 0 ? _e : luxon_1.DateTime.now().weekNumber;
    }
    Object.defineProperty(Date, "string", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (string) {
            var split = string.split("-");
            var year = +split[0];
            var month = +split[1];
            var day = +split[2];
            return new Date(luxon_1.DateTime.local(year, month, day));
        }
    });
    Object.defineProperty(Date.prototype, "set", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var year = _a.year, month = _a.month, day = _a.day;
            var currentDate = this.getDateTime();
            var result = currentDate.set({ year: year, month: month, day: day });
            this.setParamsFromDateTime(result);
        }
    });
    Object.defineProperty(Date.prototype, "plus", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var year = _a.year, month = _a.month, day = _a.day;
            var currentDate = this.getDateTime();
            var result = currentDate.plus({ year: year, month: month, day: day });
            this.setParamsFromDateTime(result);
        }
    });
    Object.defineProperty(Date.prototype, "setParamsFromDateTime", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (dateTime) {
            this.year = dateTime.year;
            this.month = dateTime.month;
            this.day = dateTime.day;
            this.weekday = dateTime.weekday;
            this.weekNumber = dateTime.weekNumber;
        }
    });
    Object.defineProperty(Date.prototype, "getDateTime", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return luxon_1.DateTime.local(this.getYear(), this.getMonth(), this.getDay());
        }
    });
    Object.defineProperty(Date.prototype, "getYear", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.year;
        }
    });
    Object.defineProperty(Date.prototype, "getMonth", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.month;
        }
    });
    Object.defineProperty(Date.prototype, "getDay", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.day;
        }
    });
    Object.defineProperty(Date.prototype, "getLastDay", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.getDateTime().endOf("month").day;
        }
    });
    Object.defineProperty(Date.prototype, "getWeekday", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.weekday;
        }
    });
    Object.defineProperty(Date.prototype, "getWeekdayString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return exports.WEEK_DAY[this.getWeekday() - 1];
        }
    });
    Object.defineProperty(Date.prototype, "getWeekdayKorean", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return exports.WEEK_DAY_KOREAN[this.getWeekday() - 1];
        }
    });
    Object.defineProperty(Date.prototype, "getWeekNumber", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.weekNumber;
        }
    });
    Object.defineProperty(Date.prototype, "isEqualDate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (Date) {
            return this.getDateTime().equals(Date.getDateTime());
        }
    });
    Object.defineProperty(Date.prototype, "isEqualMonth", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (Date) {
            return (this.getYear() === Date.getYear() && this.getMonth() === Date.getMonth());
        }
    });
    Object.defineProperty(Date.prototype, "isEqaulDay", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (Date) {
            return this.isEqualMonth(Date) && this.getDay() === Date.getDay();
        }
    });
    Object.defineProperty(Date.prototype, "isDiffMonth", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (Date) {
            return this.getMonth() !== Date.getMonth();
        }
    });
    Object.defineProperty(Date.prototype, "getFullString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var DateFormat = _a.DateFormat, _b = _a.isYearTwoDigit, isYearTwoDigit = _b === void 0 ? false : _b, _c = _a.isMonthTwoDigit, isMonthTwoDigit = _c === void 0 ? true : _c, _d = _a.isDayTwoDigit, isDayTwoDigit = _d === void 0 ? true : _d;
            var string;
            switch (DateFormat) {
                case DATE_FORMAT.KOREAN:
                    string = "".concat(this.getYearString(isYearTwoDigit), "\uB144 ").concat(this.getMonthString(isMonthTwoDigit), "\uC6D4 ").concat(this.getDayString(isDayTwoDigit), "\uC77C");
                    break;
                case DATE_FORMAT.DASH:
                    string = "".concat(this.getYearString(isYearTwoDigit), "-").concat(this.getMonthString(isMonthTwoDigit), "-").concat(this.getDayString(isDayTwoDigit));
                    break;
                case DATE_FORMAT.DOT:
                    string = "".concat(this.getYearString(isYearTwoDigit), ".").concat(this.getMonthString(isMonthTwoDigit), ".").concat(this.getDayString(isDayTwoDigit));
                    break;
            }
            return string;
        }
    });
    Object.defineProperty(Date.prototype, "getYearMonthString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var DateFormat = _a.DateFormat, _b = _a.isYearTwoDigit, isYearTwoDigit = _b === void 0 ? false : _b, _c = _a.isMonthTwoDigit, isMonthTwoDigit = _c === void 0 ? true : _c;
            var string;
            switch (DateFormat) {
                case DATE_FORMAT.KOREAN:
                    string = "".concat(this.getYearString(isYearTwoDigit), "\uB144 ").concat(this.getMonthString(isMonthTwoDigit), "\uC6D4");
                    break;
                case DATE_FORMAT.DASH:
                    string = "".concat(this.getYearString(isYearTwoDigit), "-").concat(this.getMonthString(isMonthTwoDigit));
                    break;
                case DATE_FORMAT.DOT:
                    string = "".concat(this.getYearString(isYearTwoDigit), ".").concat(this.getMonthString(isMonthTwoDigit));
                    break;
            }
            return string;
        }
    });
    Object.defineProperty(Date.prototype, "getMonthDayString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (_a) {
            var DateFormat = _a.DateFormat, _b = _a.isMonthTwoDigit, isMonthTwoDigit = _b === void 0 ? true : _b, _c = _a.isDayTwoDigit, isDayTwoDigit = _c === void 0 ? true : _c;
            var string;
            switch (DateFormat) {
                case DATE_FORMAT.KOREAN:
                    string = "".concat(this.getMonthString(isMonthTwoDigit), "\uC6D4 ").concat(this.getDayString(isDayTwoDigit), "\uC77C");
                    break;
                case DATE_FORMAT.DASH:
                    string = "".concat(this.getMonthString(isMonthTwoDigit), "-").concat(this.getDayString(isDayTwoDigit));
                    break;
                case DATE_FORMAT.DOT:
                    string = "".concat(this.getMonthString(isMonthTwoDigit), ".").concat(this.getDayString(isDayTwoDigit));
                    break;
            }
            return string;
        }
    });
    Object.defineProperty(Date.prototype, "getYearString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (isTwoDigit) {
            return isTwoDigit
                ? "".concat(this.getYear())
                : this.getYear() < 10
                    ? "000".concat(this.getYear())
                    : this.getYear() < 100
                        ? "00".concat(this.getYear())
                        : this.getYear() < 1000
                            ? "0".concat(this.getYear())
                            : "".concat(this.getYear());
        }
    });
    Object.defineProperty(Date.prototype, "getMonthString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (isTwoDigit) {
            return isTwoDigit
                ? "".concat(this.getMonth() < 10 ? "0".concat(this.getMonth()) : "".concat(this.getMonth()))
                : "".concat(this.getMonth());
        }
    });
    Object.defineProperty(Date.prototype, "getDayString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (isTwoDigit) {
            return isTwoDigit
                ? "".concat(this.getDay() < 10 ? "0".concat(this.getDay()) : "".concat(this.getDay()))
                : "".concat(this.getDay());
        }
    });
    return Date;
}());
exports.Date = Date;
var getNearestPrevMonday = function (dateTime) {
    var dist = 1 - dateTime.weekday;
    return dateTime.plus({ days: dist });
};
var getNearestNextSunday = function (dateTime) {
    var dist = 7 - dateTime.weekday;
    return dateTime.plus({ days: dist });
};
var getNearestPrevSunday = function (dateTime) {
    var dist = 0 - dateTime.weekday;
    return dateTime.plus({ days: dist });
};
var getNearestNextSaturday = function (dateTime) {
    var dist = 6 - dateTime.weekday;
    return dateTime.plus({ days: dist });
};
var getCalendarDate = function (_a) {
    var dateTime = _a.dateTime, _b = _a.isMondayFirst, isMondayFirst = _b === void 0 ? true : _b;
    var startDate = isMondayFirst
        ? getNearestPrevMonday(dateTime.startOf("month"))
        : getNearestPrevSunday(dateTime.startOf("month"));
    var endDate = isMondayFirst
        ? getNearestNextSunday(dateTime.endOf("month"))
        : getNearestNextSaturday(dateTime.endOf("month"));
    var calendarDate = [];
    for (var i = startDate; i <= endDate; i = i.plus({ days: 1 })) {
        var year = i.year, month = i.month, day = i.day;
        calendarDate.push(new Date(luxon_1.DateTime.local(year, month, day)));
    }
    return calendarDate;
};
exports.getCalendarDate = getCalendarDate;
