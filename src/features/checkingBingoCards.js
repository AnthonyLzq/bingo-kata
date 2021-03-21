// Checking bingo cards

const { callANumber } = require('./callingBingoNumbers')
const { bingoCardBuilder } = require('./generatingBingoCards')

const validatingPlay = (result = 'winner') => {
  const bingoCard = bingoCardBuilder.getBingoCard()
  let numbersLeft =
    bingoCard.B.length +
    bingoCard.I.length +
    bingoCard.N.length +
    bingoCard.G.length +
    bingoCard.O.length

  while (true) {
    const number = callANumber().next().value

    if (number >= 1 && number <= 15 && bingoCard.B.includes(number)) {
      bingoCard.B.splice(bingoCard.B.indexOf(number), 1)
      numbersLeft--
    } else if (number >= 16 && number <= 30 && bingoCard.I.includes(number)) {
      bingoCard.I.splice(bingoCard.I.indexOf(number), 1)
      numbersLeft--
    } else if (number >= 31 && number <= 45 && bingoCard.N.includes(number)) {
      bingoCard.N.splice(bingoCard.N.indexOf(number), 1)
      numbersLeft--
    } else if (number >= 46 && number <= 60 && bingoCard.G.includes(number)) {
      bingoCard.G.splice(bingoCard.G.indexOf(number), 1)
      numbersLeft--
    } else {
      bingoCard.O.splice(bingoCard.O.indexOf(number), 1)
      numbersLeft--
    }

    if (result === 'winner' && numbersLeft === 0) return 'winner'
    else if (result === 'loser' && numbersLeft === 1) return 'loser'
  }
}

module.exports = {
  validatingPlay
}
