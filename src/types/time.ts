export enum TIME_TYPE {
  AM = "AM",
  PM = "PM",
}

export const HOURS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

enum HOUR {
  ONE_DAY = 24,
  HALF_DAY = 12,
}

enum MIN {
  ONE_DAY = 1440,
  HOUR = 60,
}

enum SECONDS {
  ONE_DAY = 86400,
  HOUR = 3600,
  MIN = 60,
}
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

export class Time {
  private hour: number;
  private min: number;
  private seconds: number;

  constructor(params: TimeParams) {
    this.hour = (params?.hour === 24 ? 0 : params?.hour) ?? 0;
    this.min = params?.min ?? 0;
    this.seconds = params?.seconds ?? 0;
  }

  static string(time: string) {
    const splits = time.split(":");
    const hour = +splits[0];
    const min = +splits[0];
    const seconds = +splits[0];
    return new Time({ hour, min, seconds });
  }

  static hourPassed(hourPassed: number) {
    const hour = hourPassed;
    const min = 0;
    const seconds = 0;
    return new Time({ hour, min, seconds });
  }

  static minPassed(minPassed: number) {
    const hour = Math.floor(minPassed / MIN.HOUR);
    const min = minPassed % MIN.HOUR;
    const seconds = 0;
    return new Time({ hour, min, seconds });
  }

  static secondsPassed(secondsPassed: number) {
    const hour = Math.floor(secondsPassed / SECONDS.HOUR);
    const min = Math.floor((secondsPassed % SECONDS.HOUR) / SECONDS.MIN);
    const seconds = (secondsPassed % SECONDS.HOUR) % SECONDS.MIN;
    return new Time({ hour, min, seconds });
  }

  getTimeType(): TIME_TYPE {
    return this.getHour24() < 12 ? TIME_TYPE.AM : TIME_TYPE.PM;
  }

  getHour24(): number {
    return Math.floor(this.hour % HOUR.ONE_DAY);
  }

  getHour12(): number {
    const hour = Math.floor(this.getHour24() % HOUR.HALF_DAY);
    return hour === 0 ? 12 : hour;
  }

  getMin(): number {
    return Math.floor(this.min);
  }

  getSeconds(): number {
    return Math.floor(this.seconds);
  }

  setHour(hour: number): void {
    this.hour = hour;
  }

  setMin(min: number): void {
    this.min = min;
  }

  setSeconds(seconds: number): void {
    this.seconds = seconds;
  }

  getHourPassed(): number {
    return (
      this.getHour24() +
      this.getMin() / MIN.HOUR +
      this.getSeconds() / SECONDS.HOUR
    );
  }

  getMinPassed(): number {
    return (
      this.getHour24() * MIN.HOUR +
      this.getMin() +
      this.getSeconds() / SECONDS.MIN
    );
  }

  getSecondsPassed(): number {
    return (
      this.getHour24() * SECONDS.HOUR +
      this.getMin() * SECONDS.MIN +
      this.getSeconds()
    );
  }

  plus({ hour, min, seconds }: TimeParams) {
    const secondsPassed = this.getSecondsPassed();
    const total =
      ((hour ?? 0) * SECONDS.HOUR + (min ?? 0) * SECONDS.MIN + (seconds ?? 0)) %
      SECONDS.ONE_DAY;

    const newHour = Math.floor(total / SECONDS.HOUR);
    const newMin = Math.floor((total % SECONDS.HOUR) / SECONDS.MIN);
    const newSeconds = (total % SECONDS.HOUR) % SECONDS.MIN;

    this.setHour(newHour);
    this.setMin(newMin);
    this.setSeconds(newSeconds);
  }

  getString({
    isPrintTimeType,
    isPrintHour,
    isPrintMin,
    isPrintSeconds,
  }: getStringParams): string {
    const timeType = isPrintTimeType ? `${this.getTimeType()}` : "";
    const hour = isPrintHour
      ? `${isPrintTimeType ? " " : ""}${this.getTwoDigit(this.getHour12())}`
      : "";
    const min = isPrintMin
      ? `${isPrintHour ? ":" : ""}${this.getTwoDigit(this.getMin())}`
      : "";
    const seconds = isPrintSeconds
      ? `${isPrintMin ? ":" : isPrintHour ? ":" : ""}${this.getTwoDigit(
          this.getSeconds()
        )}`
      : "";

    return `${timeType}${hour}${min}${seconds}`;
  }

  getString24Hour({
    isPrintHour,
    isPrintMin,
    isPrintSeconds,
  }: getStringParams): string {
    const hour = isPrintHour ? `${this.getTwoDigit(this.getHour24())}` : "";
    const min = isPrintMin
      ? `${isPrintHour ? ":" : ""}${this.getTwoDigit(this.getMin())}`
      : "";
    const seconds = isPrintSeconds
      ? `${isPrintMin ? ":" : isPrintHour ? ":" : ""}${this.getTwoDigit(
          this.getSeconds()
        )}`
      : "";
    return `${hour}${min}${seconds}`;
  }

  getTwoDigit(input: number): string {
    return input < 10 ? `0${input}` : `${input}`;
  }
}
