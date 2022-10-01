import { fillZero, quotient } from "../utilities/number";

export enum TIME_TYPE {
  AM = "AM",
  PM = "PM",
}

export const HOURS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

const DAY = 86400 as const;
const HOUR = 3600 as const;
const MIN = 60 as const;

export interface ConstructorParams {
  hour?: number;
  min?: number;
  seconds?: number;
}

interface getStringParams {
  show24Hour?: boolean;
  showSeconds?: boolean;
}

export class Time {
  private passed: number;

  /**
   * Constructor
   * @param params hour, min, seconds
   */
  constructor(params: ConstructorParams) {
    this.passed =
      ((params.hour ?? 0) * HOUR +
        (params.min ?? 0) * MIN +
        (params.seconds ?? 0)) %
      DAY;
  }

  /**
   * Constructor
   * @param time time string ex) "09:00:00"
   * @returns Time
   */
  static string(time: string) {
    const splits = time.split(":");
    const hour = +splits[0];
    const min = +splits[1];
    const seconds = isNaN(+splits[2]) ? 0 : +splits[2];

    return new Time({ hour, min, seconds });
  }

  /**
   * Constructor
   * @param passed total of the passed time in seconds
   * @returns Time
   */
  static passed(passed: number) {
    const hour = quotient(passed, HOUR);
    const min = quotient(passed % HOUR, MIN);
    const seconds = (passed % HOUR) % MIN;
    return new Time({ hour, min, seconds });
  }

  /**
   * @returns Get whether it is AM or PM.
   */
  getTimeType(): TIME_TYPE {
    return this.getHour() < 12 ? TIME_TYPE.AM : TIME_TYPE.PM;
  }

  /**
   * @returns hour
   */
  getHour(): number {
    return quotient(this.passed, HOUR);
  }

  /**
   * @returns minute
   */
  getMin(): number {
    return quotient(this.passed % HOUR, MIN);
  }

  /**
   * @returns seconds
   */
  getSeconds(): number {
    return (this.passed % HOUR) % MIN;
  }

  /**
   * @returns total of the passed time in hour
   */
  getHourPassed(): number {
    return this.passed / HOUR;
  }

  /**
   * @returns total of the passed time in minute
   */
  getMinPassed(): number {
    return this.passed / MIN;
  }

  /**
   * @returns total of the passed time in seconds
   */
  getSecondsPassed(): number {
    return this.passed;
  }

  /**
   * @param passed total of the passed time in seconds to set
   */
  setPassed(passed: number): void {
    this.passed = passed % DAY;
  }

  /**
   * @param hour hour to set
   */
  setHour(hour: number): void {
    const passed =
      this.getSecondsPassed() - this.getHour() * HOUR + hour * HOUR;
    this.setPassed(passed);
  }

  /**
   * @param min minute to set
   */
  setMin(min: number): void {
    const passed = this.getSecondsPassed() - this.getMin() * MIN + min * MIN;
    this.setPassed(passed);
  }

  /**
   * @param seconds seconds to set
   */
  setSeconds(seconds: number): void {
    const passed = this.getSecondsPassed() - this.getSeconds() + seconds;
    this.setPassed(passed);
  }

  /**
   * @param hours hour to add
   * @param min minute to add
   * @param seconds seconds to add
   */
  plus({ hour, min, seconds }: ConstructorParams): void {
    const target = new Time({ hour, min, seconds });
    const secondsPassed = this.getSecondsPassed();
    const targetSecondsPassed = target.getSecondsPassed();

    this.setPassed(secondsPassed + targetSecondsPassed);
  }

  /**
   * @param show24Hour show in 24 hours
   * @param showSeconds show seconds in string
   * @returns time string ex) "09:00:00"
   */
  getString({ show24Hour, showSeconds }: getStringParams): string {
    const timeType = !show24Hour ? `${this.getTimeType()} ` : "";
    const hour = fillZero(this.getHour() % (show24Hour ? 24 : 12));
    const min = fillZero(this.getMin());
    const seconds = showSeconds ? `:${fillZero(this.getSeconds())}` : "";

    return `${timeType}${hour}:${min}${seconds}`;
  }
}
