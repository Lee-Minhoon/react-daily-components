import { DateTime } from "luxon";
export declare const WEEK_DAY: string[];
export declare const WEEK_DAY_ABBR: string[];
export declare const WEEK_DAY_KOREAN: string[];
export declare enum DATE_FORMAT {
    KOREAN = "KOREAN",
    DASH = "DASH",
    DOT = "DOT"
}
interface DateParams {
    year?: number;
    month?: number;
    day?: number;
}
interface getFullStringParams {
    DateFormat: DATE_FORMAT;
    isYearTwoDigit?: boolean;
    isMonthTwoDigit?: boolean;
    isDayTwoDigit?: boolean;
}
interface getYearMonthParams {
    DateFormat: DATE_FORMAT;
    isYearTwoDigit?: boolean;
    isMonthTwoDigit?: boolean;
}
interface getMonthDayParams {
    DateFormat: DATE_FORMAT;
    isMonthTwoDigit?: boolean;
    isDayTwoDigit?: boolean;
}
export declare class Date {
    private year;
    private month;
    private day;
    private weekday;
    private weekNumber;
    constructor(params: DateTime);
    static string(string: string): Date;
    set({ year, month, day }: DateParams): void;
    plus({ year, month, day }: DateParams): void;
    setParamsFromDateTime(dateTime: DateTime): void;
    getDateTime(): DateTime;
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    getLastDay(): number;
    getWeekday(): number;
    getWeekdayString(): string;
    getWeekdayKorean(): string;
    getWeekNumber(): number;
    isEqualDate(Date: Date): boolean;
    isEqualMonth(Date: Date): boolean;
    isEqaulDay(Date: Date): boolean;
    isDiffMonth(Date: Date): boolean;
    getFullString({ DateFormat, isYearTwoDigit, isMonthTwoDigit, isDayTwoDigit, }: getFullStringParams): string;
    getYearMonthString({ DateFormat, isYearTwoDigit, isMonthTwoDigit, }: getYearMonthParams): string;
    getMonthDayString({ DateFormat, isMonthTwoDigit, isDayTwoDigit, }: getMonthDayParams): string;
    getYearString(isTwoDigit?: boolean): string;
    getMonthString(isTwoDigit?: boolean): string;
    getDayString(isTwoDigit?: boolean): string;
}
export interface getCalendarDateParams {
    dateTime: DateTime;
    isMondayFirst?: boolean;
}
export declare const getCalendarDate: ({ dateTime, isMondayFirst, }: getCalendarDateParams) => Array<Date>;
export {};
