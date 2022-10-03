import { fillZero, quotient } from "../utilities/number";

export enum TIMES_OF_DAY {
  AM = "AM",
  PM = "PM",
}

export enum UNIT {
  TIMES_OF_DAY = "times",
  HOUR = "hour",
  MIN = "min",
  SECONDS = "seconds",
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

type SetTimeAction = number | ((prev: number) => number);

interface getStringParams {
  show24Hour?: boolean;
  showSeconds?: boolean;
}

export class Time {
  passed: number;

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
    time = time.toUpperCase();
    let timesOfDay;
    if (time.includes(TIMES_OF_DAY.AM) || time.includes(TIMES_OF_DAY.PM)) {
      timesOfDay = time.slice(0, 2);
      time = time.slice(3);
    }
    const splits = time.split(":");
    const hour = +splits[0] + (timesOfDay === "PM" ? 12 : 0);
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
  getTimesOfDay(): TIMES_OF_DAY {
    return this.getHour() < 12 ? TIMES_OF_DAY.AM : TIMES_OF_DAY.PM;
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
   * @param action hour to set
   */
  setHour(action: SetTimeAction, timesOfDay?: TIMES_OF_DAY): void {
    let hoursToAdd = 0;
    if (timesOfDay === TIMES_OF_DAY.PM) {
      hoursToAdd = 12;
    }
    const hour = getState(action, this.getHour()) + hoursToAdd;
    const passed =
      this.getSecondsPassed() - this.getHour() * HOUR + hour * HOUR;
    this.setPassed(passed);
  }

  /**
   * @param action minute to set
   */
  setMin(action: SetTimeAction): void {
    const min = getState(action, this.getMin());
    const passed = this.getSecondsPassed() - this.getMin() * MIN + min * MIN;
    this.setPassed(passed);
  }

  /**
   * @param action seconds to set
   */
  setSeconds(action: SetTimeAction): void {
    const seconds = getState(action, this.getSeconds());
    const passed = this.getSecondsPassed() - this.getSeconds() + seconds;
    this.setPassed(passed);
  }

  /**
   * @param passed total of the passed time in seconds to set
   */
  setPassed(passed: number): void {
    this.passed = passed % DAY;
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
    const timeType = !show24Hour ? `${this.getTimesOfDay()} ` : "";
    const hour = fillZero(this.getHour() % (show24Hour ? 24 : 12));
    const min = fillZero(this.getMin());
    const seconds = showSeconds ? `:${fillZero(this.getSeconds())}` : "";

    return `${timeType}${hour}:${min}${seconds}`;
  }
}

const getState = (action: SetTimeAction, prev: number): number => {
  let next;
  if (typeof action === "number") {
    next = action;
  } else {
    next = action(prev);
  }
  return next;
};
