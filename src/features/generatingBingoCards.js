// Generating Bingo Cards

class BingoCard {
  constructor (B, I, N, G, O) {
    this.B = B
    this.I = I
    this.N = N
    this.G = G
    this.O = O
  }
}

class BingoCardGenerator {
  getBingoCard () {
    const B = this._fillArray(1, 15)
    const I = this._fillArray(16, 30)
    const N = this._fillArray(31, 45, 4)
    const G = this._fillArray(46, 60)
    const O = this._fillArray(61, 75)

    return new BingoCard(B, I, N, G, O)
  }

  _randomNumberGeneratorBetweenBounds (lowerBound, upperBound) {
    return Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound)
  }

  _fillArray (lowerBound, upperBound, limit = 5) {
    const aux = []
    for (let i = 0; i < limit; i++)
      aux.push(this._randomNumberGeneratorBetweenBounds(lowerBound, upperBound))

    return aux
  } 
}

module.exports = {
  bingoCardBuilder: new BingoCardGenerator()
}
