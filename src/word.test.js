import Word from "./word";

describe("Guess Class", () => {
  describe("Wordle is arise. (Non-Repeating Letters)", () => {
    const word = new Word("arise");

    test("word.value equals 'arise'", () => {
      expect(word.value).toBe("arise");
    });
    
    test("word.charIndexes contains the correct K/V pairs", () => {
      const expectedMap = new Map([
        ['a', [0]],
        ['r', [1]],
        ['i', [2]],
        ['s', [3]],
        ['e', [4]],
      ])
      expect(word.charIndexes).toStrictEqual(expectedMap);
    });
  });

  describe("Wordle is swill. (Repeating Letters)", () => {
    const word = new Word("swill");

    test("word.value equals 'swill'", () => {
      expect(word.value).toBe("swill");
    });
    
    test("word.charIndexes contains the correct K/V pairs", () => {
      const expectedMap = new Map([
        ['s', [0]],
        ['w', [1]],
        ['i', [2]],
        ['l', [3, 4]],
      ])
      expect(word.charIndexes).toStrictEqual(expectedMap);
    });
  });
});
