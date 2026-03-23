export function RandomDateBeforeNow() {
  const actualDate = new Date();
  const randomSeconds = Math.random() * 30 * 24 * 60 * 60;
  const randomDate = new Date(actualDate.getTime() - randomSeconds);
  return randomDate;
}
