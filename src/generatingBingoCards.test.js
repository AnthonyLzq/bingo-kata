// TESTING GENERATING BINGO CARDS

const feature2 = require('./features/generatingBingoCards')
const { bingoCardBuilder } = feature2

test('Every card has 24 numbers', () => {
  const bingoCard = bingoCardBuilder.getBingoCard()
  const numberOfCards =
    bingoCard.B.length +
    bingoCard.I.length +
    bingoCard.N.length +
    bingoCard.G.length +
    bingoCard.O.length

  expect(numberOfCards).toEqual(24)
})

test('Every card has numbers between its bounds', () => {
  const bingoCard = bingoCardBuilder.getBingoCard()
  let areTheValuesBetweenBounds = true

  // For the first column
  bingoCard.B.forEach(
    value => areTheValuesBetweenBounds && value >= 1 && value <= 15
  )

  // For the second column
  bingoCard.I.forEach(
    value => areTheValuesBetweenBounds && value >= 16 && value <= 30
  )

  // For the second column
  bingoCard.N.forEach(
    value => areTheValuesBetweenBounds && value >= 31 && value <= 45
  )

  // For the second column
  bingoCard.G.forEach(
    value => areTheValuesBetweenBounds && value >= 46 && value <= 60
  )

  // For the second column
  bingoCard.O.forEach(
    value => areTheValuesBetweenBounds && value >= 61 && value <= 75
  )

  expect(areTheValuesBetweenBounds).toEqual(true)
})
