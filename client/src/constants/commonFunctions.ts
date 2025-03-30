export function getDayOfTheWeek() {
  const date = new Date();
  const day = date.getDay();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[day];
}
export function getWeekNumber(): string {
  const date: Date = new Date();
  const startOfYear: Date = new Date(date.getFullYear(), 0, 1);
  const pastDays = (date.getTime() - startOfYear.getTime()) / 86400000; // Convert milliseconds to days
  return "Week " + Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);
}

export function getMonthAsString(): string {
  const date = new Date().getMonth();
  const MonthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return MonthsList[date];
}
