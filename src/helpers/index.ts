export const formatMatchDate = (dateString: string) => {
  const dateObject = new Date(dateString)
  const day = dateObject.getDate().toString().padStart(2, '0')
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = monthNames[dateObject.getMonth()]
  const hours = dateObject.getHours()
  const minutes = dateObject.getMinutes()
  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')

  return `${day} ${month}\n${formattedHours}:${formattedMinutes}`
}
