import Word from "./word";

describe("Guess Class", () => {
  describe("arise", () => {
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
      console.log(expectedMap);

      expect(word.charIndexes).toStrictEqual(expectedMap);
    });
    
  });
});