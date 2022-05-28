import { DateTime } from "luxon";

export const WEEK_DAY_STRING = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
] as const;

export const WEEK_DAY_KOREAN = [
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
  "일",
] as const;

export enum DATE_FORMAT {
  KOREAN = "KOREAN",
  DASH = "DASH",
  DOT = "DOT",
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

export class Date {
  private year: number;
  private month: number;
  private day: number;
  private weekday: number;
  private weekNumber: number;

  constructor(params: DateTime) {
    this.year = params?.year ?? DateTime.now().year;
    this.month = params?.month ?? DateTime.now().month;
    this.day = params?.day ?? DateTime.now().day;
    this.weekday = params?.weekday ?? DateTime.now().weekday;
    this.weekNumber = params?.weekNumber ?? DateTime.now().weekNumber;
  }

  static string(string: string) {
    const split = string.split("-");
    const year = +split[0];
    const month = +split[1];
    const day = +split[2];
    return new Date(DateTime.local(year, month, day));
  }

  set({ year, month, day }: DateParams) {
    const currentDate = this.getDateTime();
    const result = currentDate.set({ year, month, day });
    this.setParamsFromDateTime(result);
  }

  plus({ year, month, day }: DateParams) {
    const currentDate = this.getDateTime();
    const result = currentDate.plus({ year, month, day });
    this.setParamsFromDateTime(result);
  }

  setParamsFromDateTime(dateTime: DateTime): void {
    this.year = dateTime.year;
    this.month = dateTime.month;
    this.day = dateTime.day;
    this.weekday = dateTime.weekday;
    this.weekNumber = dateTime.weekNumber;
  }

  getDateTime(): DateTime {
    return DateTime.local(this.getYear(), this.getMonth(), this.getDay());
  }

  getYear(): number {
    return this.year;
  }

  getMonth(): number {
    return this.month;
  }

  getDay(): number {
    return this.day;
  }

  getLastDay(): number {
    return this.getDateTime().endOf("month").day;
  }

  getWeekday(): number {
    return this.weekday;
  }

  getWeekdayString(): string {
    return WEEK_DAY_STRING[this.getWeekday() - 1];
  }

  getWeekdayKorean(): string {
    return WEEK_DAY_KOREAN[this.getWeekday() - 1];
  }

  getWeekNumber(): number {
    return this.weekNumber;
  }

  isEqualDate(Date: Date): boolean {
    return this.getDateTime().equals(Date.getDateTime());
  }

  isEqualMonth(Date: Date): boolean {
    return (
      this.getYear() === Date.getYear() && this.getMonth() === Date.getMonth()
    );
  }

  isEqaulDay(Date: Date): boolean {
    return this.isEqualMonth(Date) && this.getDay() === Date.getDay();
  }

  isDiffMonth(Date: Date): boolean {
    return this.getMonth() !== Date.getMonth();
  }

  getFullString({
    DateFormat,
    isYearTwoDigit = false,
    isMonthTwoDigit = true,
    isDayTwoDigit = true,
  }: getFullStringParams): string {
    let string;
    switch (DateFormat) {
      case DATE_FORMAT.KOREAN:
        string = `${this.getYearString(isYearTwoDigit)}년 ${this.getMonthString(
          isMonthTwoDigit
        )}월 ${this.getDayString(isDayTwoDigit)}일`;
        break;
      case DATE_FORMAT.DASH:
        string = `${this.getYearString(isYearTwoDigit)}-${this.getMonthString(
          isMonthTwoDigit
        )}-${this.getDayString(isDayTwoDigit)}`;
        break;
      case DATE_FORMAT.DOT:
        string = `${this.getYearString(isYearTwoDigit)}.${this.getMonthString(
          isMonthTwoDigit
        )}.${this.getDayString(isDayTwoDigit)}`;
        break;
    }
    return string;
  }

  getYearMonthString({
    DateFormat,
    isYearTwoDigit = false,
    isMonthTwoDigit = true,
  }: getYearMonthParams): string {
    let string;
    switch (DateFormat) {
      case DATE_FORMAT.KOREAN:
        string = `${this.getYearString(isYearTwoDigit)}년 ${this.getMonthString(
          isMonthTwoDigit
        )}월`;
        break;
      case DATE_FORMAT.DASH:
        string = `${this.getYearString(isYearTwoDigit)}-${this.getMonthString(
          isMonthTwoDigit
        )}`;
        break;
      case DATE_FORMAT.DOT:
        string = `${this.getYearString(isYearTwoDigit)}.${this.getMonthString(
          isMonthTwoDigit
        )}`;
        break;
    }
    return string;
  }

  getMonthDayString({
    DateFormat,
    isMonthTwoDigit = true,
    isDayTwoDigit = true,
  }: getMonthDayParams): string {
    let string;
    switch (DateFormat) {
      case DATE_FORMAT.KOREAN:
        string = `${this.getMonthString(isMonthTwoDigit)}월 ${this.getDayString(
          isDayTwoDigit
        )}일`;
        break;
      case DATE_FORMAT.DASH:
        string = `${this.getMonthString(isMonthTwoDigit)}-${this.getDayString(
          isDayTwoDigit
        )}`;
        break;
      case DATE_FORMAT.DOT:
        string = `${this.getMonthString(isMonthTwoDigit)}.${this.getDayString(
          isDayTwoDigit
        )}`;
        break;
    }
    return string;
  }

  getYearString(isTwoDigit?: boolean): string {
    return isTwoDigit
      ? `${this.getYear() < 10 ? `0${this.getYear()}` : `${this.getYear()}`}`
      : `${this.getYear()}`;
  }

  getMonthString(isTwoDigit?: boolean): string {
    return isTwoDigit
      ? `${this.getMonth() < 10 ? `0${this.getMonth()}` : `${this.getMonth()}`}`
      : `${this.getMonth()}`;
  }

  getDayString(isTwoDigit?: boolean): string {
    return isTwoDigit
      ? `${this.getDay() < 10 ? `0${this.getDay()}` : `${this.getDay()}`}`
      : `${this.getDay()}`;
  }
}

const getNearestPrevMonday = (dateTime: DateTime): DateTime => {
  const dist = 1 - dateTime.weekday;
  return dateTime.plus({ days: dist });
};

const getNearestNextSunday = (dateTime: DateTime): DateTime => {
  const dist = 7 - dateTime.weekday;
  return dateTime.plus({ days: dist });
};

export const getCalendarDate = (dateTime: DateTime): Array<Date> => {
  const startDate = getNearestPrevMonday(dateTime.startOf("month"));
  const endDate = getNearestNextSunday(dateTime.endOf("month"));

  const calendarDate: Array<Date> = [];

  for (let i = startDate; i <= endDate; i = i.plus({ days: 1 })) {
    const { year, month, day } = i;

    calendarDate.push(new Date(DateTime.local(year, month, day)));
  }

  return calendarDate;
};
