import datesEqualInCalendar from '../datesEqualInCalendar';

test('datesEqualInCalendar works as expected', () => {
  // it's ok to ignore months with les than 31 days
  // they will just fall back to Invalid Date
  const possibleDatesCount = 31;
  const possibleMonthCount = 12;

  for (let day = 1; day <= possibleDatesCount; day++) {
    for (let month = 1; month <= possibleMonthCount; month++) {
      for (let year = 1970; year < 2025; year++) {
        const date1 = new Date(`${month}/${day}/${year} ${randInt(0, 23)}:${randInt(0, 59)}`);
        const date2 = new Date(`${month}/${day}/${year} ${randInt(0, 23)}:${randInt(0, 59)}`);
        if (isValidDate(date1) && isValidDate(date2)) {
          expect(date1.getTime()).not.toBeNaN();
          expect(date2.getTime()).not.toBeNaN();
          expect(datesEqualInCalendar(date1, date2)).toEqual(true);
          expect(datesEqualInCalendar(date1.toString(), date2.toString())).toEqual(true);
          expect(datesEqualInCalendar(date1.getTime(), date2.toString())).toEqual(true);
          expect(datesEqualInCalendar(date1.toString(), date2.getTime())).toEqual(true);
          expect(datesEqualInCalendar(date1.getTime(), date2.getTime())).toEqual(true);
          expect(datesEqualInCalendar(date1.toUTCString(), date2.toUTCString())).toEqual(true);
          expect(datesEqualInCalendar(date1.getTime(), date2.toString())).toEqual(true);
        } else {
          expect(datesEqualInCalendar(date1, date2)).toEqual(false);
          expect(datesEqualInCalendar(date1.toString(), date2.toString())).toEqual(false);
          expect(datesEqualInCalendar(date1.getTime(), date2.toString())).toEqual(false);
          expect(datesEqualInCalendar(date1.toString(), date2.getTime())).toEqual(false);
          expect(datesEqualInCalendar(date1.getTime(), date2.getTime())).toEqual(false);
          expect(datesEqualInCalendar(date1.toUTCString(), date2.toUTCString())).toEqual(false);
          expect(datesEqualInCalendar(date1.getTime(), date2.toString())).toEqual(false);
        }
      }
    }
  }
});


function randInt(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function isValidDate(d: Date): boolean {
  return d instanceof Date && !isNaN(d.getTime());
}
