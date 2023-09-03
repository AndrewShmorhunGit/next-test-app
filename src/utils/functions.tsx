export function getDate() {
  const [day, month, dayOfMonth, year] = new Date()
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    })
    .split(" ");
  const date = [month.toUpperCase() + ",", year].join(" ");
  return {
    day: day.slice(0, -1),
    date: date.slice(0, -1),
    dayOfMonth: dayOfMonth.slice(0, -1),
  };
}

export function transformDateFormat(dateString: string): string[] {
  const [year, month, day] = dateString.split("-");

  const format1 = `${month} / ${day} / ${year}`;
  const format2 = `${day} / ${month}`;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const format3 = `${day} / ${monthNames[Number(month) - 1]} / ${year}`;

  return [format1, format2, format3];
}
