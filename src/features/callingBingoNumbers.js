// CALLING BINGO NUMBERS

// We create a function to generate an array of numbers from 1 to 75 inclusive
const createBingoNumbers = () => {
  const bingoNumbersArray = []
  for (let i = 1; i <= 75; i++) bingoNumbersArray.push(i)

  return bingoNumbersArray
}

// We create an array with all the numbers from 1 to 75 inclusive
let BINGO_NUMBERS_ARRAY = createBingoNumbers()

// Generate a caller
function* callANumber() {
  if (BINGO_NUMBERS_ARRAY.length > 0) {
    BINGO_NUMBERS_ARRAY.sort(() => Math.random() - 0.5)

    yield BINGO_NUMBERS_ARRAY.splice(0, 1)[0]
  } else throw new Error('All the numbers were called')
}

// Create a function to reset the array in case we need it
const resetBingoNumbers = () => (BINGO_NUMBERS_ARRAY = createBingoNumbers())

const getCurrentBingoArray = () => BINGO_NUMBERS_ARRAY

module.exports = {
  callANumber,
  createBingoNumbers,
  getCurrentBingoArray,
  resetBingoNumbers
}
