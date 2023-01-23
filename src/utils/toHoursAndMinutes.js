export const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`;
};

function padToTwoDigits(num) {
  return num.toString().padStart(2, "0");
}
