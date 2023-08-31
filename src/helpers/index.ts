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

export const generateWeekDays = () => {
  const daysOfWeek = ['Today', 'Tomorrow']
  const currentDate = new Date()
  for (let i = 2; i < 7; i++) {
    const nextDay = new Date()
    nextDay.setDate(currentDate.getDate() + i)
    const dayName = nextDay.toLocaleDateString('en-US', { weekday: 'long' })
    daysOfWeek.push(dayName)
  }
  return daysOfWeek
}

export const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 20) + 1
  return randomNumber
}

export const stringToLowerCase = (str: string) => {
  return str.toLowerCase()
}
