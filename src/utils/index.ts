export function getHumanDate(date: string): { date?: string; error?: string } {
  try {
    // Parse the input date string
    const inputDate = new Date(date);

    if (isNaN(inputDate.getTime())) {
      throw new Error("Invalid date format");
    }

    // Define an array of month names
    const monthNames: string[] = [
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

    // Format the date in the desired format (e.g., Jan 01, 2023)
    const formattedDate: string = `${
      monthNames[inputDate.getMonth()]
    } ${inputDate
      .getDate()
      .toString()
      .padStart(2, "0")}, ${inputDate.getFullYear()}`;

    return { date: formattedDate };
  } catch (error: any) {
    return { error: error.message };
  }
}
