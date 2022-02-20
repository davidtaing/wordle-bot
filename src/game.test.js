import Game from "./game.js";

describe("Game Class", () => {
  describe("validateGuess function", () => {
    describe("The wordle is swill", () => {
      const game = new Game("swill");
  
      test('Correct Answer returns true', () => {
        expect(Game.validateGuess("swill", game)).toBe(true);
      });

      test('Incorrect Answer returns false', () => {
        expect(Game.validateGuess("arise", game)).toBe(false);
      });
    });
  });
});
