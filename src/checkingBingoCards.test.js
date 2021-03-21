// TESTING CHECKING BINGO CARDS
const feature3 = require('./features/checkingBingoCards')
const { validatingPlay } = feature3

test('Winner', () => {
  const result = validatingPlay()

  expect(result).toEqual('winner')
})

test('Loser', () => {
  const result = validatingPlay('loser')

  expect(result).toEqual('loser')
})
