export const getRandomColor = () => {
  const randomValueOfRed = parseInt(Math.random() * 100)
  const randomValueOfBlue = parseInt(Math.random() * 100)
  const randomValueOfGreen = parseInt(Math.random() * 100)
  const hexadecimalColor = `#${randomValueOfRed}${randomValueOfBlue}${randomValueOfGreen}`
  return hexadecimalColor
}