import * as React from 'react';

export interface IFormatDateOptions {
  utc?: boolean;
  format?: DateFormat;
  timezone?: string;
}

export enum DateFormat {
  iso = 'iso', // 2020-06-11T12:57:37.141Z

  short = 'LL', // June 11, 2020
  verbose = 'LLLL z', // Thursday, June 11, 2020 12:57 PM UTC (only work on UTC date)

  englishFullDate = 'HH:mm:ss, YYYY-MM-DD', // 14:56:38, 2020-06-11
  frenchFullDate = 'YYYY-MM-DD, HH:mm:ss', // 2020-06-11, 14:56:38

  frenchDateOfTheDay = 'DD/MM/YYYY', // 27/01/2021
  englishDateOfTheDay = 'YYYY-MM-DD', // 2020-06-11

  frenchMonthYear = 'MM/YYYY', // 01/2021
  englishMonthYear = 'YYYY-MM', // 2020-06

  fullMonth = 'MMMM YYYY', // January 2021

  englishShortDate = 'MM-DD', // 12-01
  frenchShortDate = 'DD-MM', // 01-12

  dayNumber = 'DD', // 31
  day = 'dddd', // Tuesday
  shortMonth = 'MMM', // Janv.
  month = 'MMMM', // Janvier
  year = 'YYYY', // 2020

  hoursMinutesSeconds = 'HH:mm:ss', // 13:37:42
  hoursMinutes = 'HH:mm', // 13:37
}

export type Maybe<T> = T | null;

export interface IButtonProps {
  children: React.ReactElement;
  date: Maybe<Date | string>;
  formatDateOptions?: IFormatDateOptions;
}

const Button: React.FC<IButtonProps> = ({ date, children }) => {
  if (!date) {
    return null;
  }

  return <div title="hi">{children}</div>;
};

export default Button