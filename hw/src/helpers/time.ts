interface SimpleTime {
  h: number;
  m: number;
}

export const getTimeFromMinutes = (minutes: number): SimpleTime | null => {
  if (minutes < 0) {
    return null;
  }
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 23) {
    return { h: 0, m };
  }
  return { h, m };
};

export const getMinutesFromTime = (time: SimpleTime | Date): number => {
  if (time instanceof Date) {
    return time.getHours() * 60 + time.getMinutes();
  }

  const { h, m } = time;
  if (h < 0 || m < 0) {
    return -1;
  }
  return h * 60 + m;
};

export const minutesToTimeText = (mins: number): string => {
  const time = getTimeFromMinutes(mins);
  if (time === null) {
    return '00:00';
  }

  return `${time.h}:${time.m.toString().padEnd(2, '0')}`;
};
