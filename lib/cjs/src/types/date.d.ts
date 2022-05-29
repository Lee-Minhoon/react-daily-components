import { DateTime } from "luxon";
export declare const WEEK_DAY_STRING: readonly ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
export declare const WEEK_DAY_KOREAN: readonly ["월", "화", "수", "목", "금", "토", "일"];
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
export declare const getCalendarDate: (dateTime: DateTime) => Array<Date>;
export {};
