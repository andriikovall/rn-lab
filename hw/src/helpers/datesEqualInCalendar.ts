const datesEqualInCalendar = (d1: Date | string | number, d2: Date | string | number): boolean => {
  const dateA = new Date(d1);
  const dateB = new Date(d2);

  return dateA.getDate() === dateB.getDate() &&
          dateA.getMonth() === dateB.getMonth() &&
          dateA.getFullYear() === dateB.getFullYear();
};

export default datesEqualInCalendar;
