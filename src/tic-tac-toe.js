class TicTacToe {
  fieldSize = 3;
  players = ["x", "o"];

  constructor() {
    this.field = Array(this.fieldSize)
      .fill(null)
      .map((el) => Array(this.fieldSize).fill(null));
    this.currentPlayer = this.players[0];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.players.reverse()[0];
    }
  }

  isFinished() {
    return !!this.getWinner() || this.noMoreTurns()
  }

  getWinner() {
    for (let player in this.players) {
      for (let i = 0; i < this.fieldSize; i++) {
        if (this.field[i].every((x) => x === this.players[player])) {
          return this.players[player];
        } else if (this.field.every((x) => x[i] === this.players[player])) {
          return this.players[player];
        }
      }
      let diagUp = [];
      let diagDown = [];
      for (let i = 0; i < this.fieldSize; i++) {
        diagUp.push(this.field[i][i]);
        diagDown.push(this.field[i][this.fieldSize - 1 - i]);
      }
      if (diagUp.every((x) => x === this.players[player])) {
        return this.players[player];
      } else if (diagDown.every((x) => x === this.players[player])) {
        return this.players[player];
      }
    }
    return null;
  }

  noMoreTurns() {
    return this.field.every((x) => x.every((y) => y !== null));
  }
  
  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
