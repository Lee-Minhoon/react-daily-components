export declare enum TIME_TYPE {
    AM = "AM",
    PM = "PM"
}
export declare const HOURS: readonly [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export interface TimeParams {
    hour?: number;
    min?: number;
    seconds?: number;
}
interface getStringParams {
    isPrintTimeType?: boolean;
    isPrintHour?: boolean;
    isPrintMin?: boolean;
    isPrintSeconds?: boolean;
}
export declare class Time {
    private hour;
    private min;
    private seconds;
    constructor(params: TimeParams);
    static string(time: string): Time;
    static hourPassed(hourPassed: number): Time;
    static minPassed(minPassed: number): Time;
    static secondsPassed(secondsPassed: number): Time;
    getTimeType(): TIME_TYPE;
    getHour24(): number;
    getHour12(): number;
    getMin(): number;
    getSeconds(): number;
    setHour(hour: number): void;
    setMin(min: number): void;
    setSeconds(seconds: number): void;
    getHourPassed(): number;
    getMinPassed(): number;
    getSecondsPassed(): number;
    plus({ hour, min, seconds }: TimeParams): void;
    getString({ isPrintTimeType, isPrintHour, isPrintMin, isPrintSeconds, }: getStringParams): string;
    getString24Hour({ isPrintHour, isPrintMin, isPrintSeconds, }: getStringParams): string;
    getTwoDigit(input: number): string;
}
export {};
