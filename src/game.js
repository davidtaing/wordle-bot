const turns = 6;

class Game {
  constructor(wordle) {
    if (typeof wordle !== "string")
      throw Error("TypeError: Invalid Wordle");
    
    this.wordle = wordle;
  }
  
  static validateGuess(guess, Game) {
    if (typeof guess !== "string")
      throw Error("TypeError: Invalid Guess")

    if (guess === Game.wordle) {
      return true;
    } else {
      return false;
    }
  }
}

export default Game;