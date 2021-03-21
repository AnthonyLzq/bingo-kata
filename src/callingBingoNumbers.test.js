// TESTING CALLING BINGO NUMBERS

const feature1 = require('./features/callingBingoNumbers')
const {
  callANumber,
  createBingoNumbers,
  getCurrentBingoArray,
  resetBingoNumbers
} = feature1

// Testing if every number is being called once
test('Every number is called once', () => {
  const aux = createBingoNumbers()
  const result = []
  for (let i = 0; i < 75; i++) result.push(callANumber().next().value)

  expect(aux.sort()).toEqual(result.sort())
})

// Testing no more numbers available
test('All the numbers were called', () => {
  expect(() => callANumber().next().value)
    .toThrow('All the numbers were called')
})

// Testing we can re populate the array of numbers
test('We have numbers from 1 to 75 inclusive again', () => {
  resetBingoNumbers()
  const aux = createBingoNumbers()
  const result = getCurrentBingoArray()

  expect(aux.sort()).toEqual(result.sort())
})