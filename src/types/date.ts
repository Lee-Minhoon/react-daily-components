import { DateTime } from "luxon";
import { fillZero } from "../utilities/number";

export enum UNIT {
  YEAR = "year",
  MONTH = "month",
  WEEK = "week",
  DAY = "day",
}

export interface ConstructorParams {
  year: number;
  month: number;
  day: number;
}

export interface OptionalParams {
  year?: number;
  month?: number;
  day?: number;
}

export class Date {
  dateTime: DateTime;

  /**
   * Constructor
   * @param params year, month, day
   */
  constructor(params?: ConstructorParams) {
    this.dateTime = params
      ? DateTime.local(params.year, params.month, params.day)
      : DateTime.now();
  }

  /**
   * Constructor
   * @param date time string ex) "2022-03-14"
   * @returns Date
   */
  static string(date: string) {
    const split = date.split("-");
    const year = +split[0];
    const month = Math.min(+split[1], 12);
    const day = Math.min(
      +split[2],
      DateTime.local(year, month).endOf("month").day
    );
    return new Date({ year, month, day });
  }

  /**
   * @returns luxon datetime
   */
  getDateTime(): DateTime {
    return this.dateTime;
  }

  /**
   * @returns year of date
   */
  getYear(): number {
    return this.dateTime.year;
  }

  /**
   * @returns month of date
   */
  getMonth(): number {
    return this.dateTime.month;
  }

  /**
   * @returns weekday of date
   */
  getWeekday(): number {
    return this.dateTime.weekday;
  }

  /**
   * @returns weeknumber of date
   */
  getWeekNumber(): number {
    return this.dateTime.weekNumber;
  }

  /**
   * @returns day of date
   */
  getDay(): number {
    return this.dateTime.day;
  }

  /**
   * @param unit year, month, week, day
   * @returns start of the unit
   */
  getStart(unit: UNIT): DateTime {
    return this.getDateTime().startOf(unit);
  }

  /**
   * @param unit year, month, week, day
   * @returns end of the unit
   */
  getEnd(unit: UNIT): DateTime {
    return this.getDateTime().endOf(unit);
  }

  /**
   * @param year year to set
   * @param month month to set
   * @param day day to set
   */
  set({ year, month, day }: OptionalParams) {
    this.dateTime = this.dateTime.set({ year, month, day });
  }

  /**
   * @param year year to add
   * @param month month to add
   * @param day day to add
   */
  plus({ year, month, day }: OptionalParams) {
    this.dateTime = this.dateTime.plus({ year, month, day });
  }

  /**
   * @param date date to compare
   * @returns is euqal date
   */
  isEqual(date: Date): boolean {
    return this.getDateTime().equals(date.getDateTime());
  }

  /**
   * @returns date string ex) "2022-03-14"
   */
  getString(): string {
    const year = fillZero(this.getYear(), 4);
    const month = fillZero(this.getMonth());
    const day = fillZero(this.getDay());
    return `${year}-${month}-${day}`;
  }
}

export interface getCalendarParams {
  date: Date;
  mondayFirst?: boolean;
}

export const getCalendarDate = ({
  date,
  mondayFirst = true,
}: getCalendarParams): Array<Date> => {
  const startDate = mondayFirst
    ? getNearestPrevMonday(date.getDateTime().startOf("month"))
    : getNearestPrevSunday(date.getDateTime().startOf("month"));
  const endDate = mondayFirst
    ? getNearestNextSunday(date.getDateTime().endOf("month"))
    : getNearestNextSaturday(date.getDateTime().endOf("month"));

  const calendarDate: Array<Date> = [];

  for (let i = startDate; i <= endDate; i = i.plus({ days: 1 })) {
    const { year, month, day } = i;

    calendarDate.push(new Date({ year, month, day }));
  }

  return calendarDate;
};

const getNearestPrevMonday = (dateTime: DateTime): DateTime => {
  const dist = 1 - dateTime.weekday;
  return dateTime.plus({ days: dist });
};

const getNearestNextSunday = (dateTime: DateTime): DateTime => {
  const dist = 7 - dateTime.weekday;
  return dateTime.plus({ days: dist });
};

const getNearestPrevSunday = (dateTime: DateTime): DateTime => {
  const dist = 0 - dateTime.weekday;
  return dateTime.plus({ days: dist });
};

const getNearestNextSaturday = (dateTime: DateTime): DateTime => {
  const dist = 6 - dateTime.weekday;
  return dateTime.plus({ days: dist });
};
