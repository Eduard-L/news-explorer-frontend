const currentDate = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;


function getDateDaysAgo(days) {
  let date = new Date();
  date.setDate(date.getDate() - days)

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
function handleChageDateFormat(date) {
  let dateOfArticle = [...date.slice(0, 10)];
  dateOfArticle = dateOfArticle.filter((item) => {
    return parseInt(item) || parseInt(item) === 0
  })
  let year = parseInt(dateOfArticle[0] + dateOfArticle[1] + dateOfArticle[2] + dateOfArticle[3])
  let month = parseInt(dateOfArticle[4] + dateOfArticle[5])
  let day = parseInt(dateOfArticle[6] + dateOfArticle[7])

  const todayDate = new Date();
  todayDate.setMonth(month - 1);

  month = todayDate.toLocaleString('en-US', {
    month: 'long',
  });

  return `${month} ${day},${year}`
}
const date7DaysAgo = getDateDaysAgo(7)

export { currentDate, date7DaysAgo, handleChageDateFormat }