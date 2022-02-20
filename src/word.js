class Word {
  constructor(word) {
    if (typeof word !== "string")
      throw Error("TypeError: Word is not a string");

    this.value = word;
    this.charIndexes = new Map();

    word
      .split("")
      .forEach(
        (char, index) => {
          const indexes = this.charIndexes.get(char);

          if (indexes) {
            this.charIndexes.set(char, indexes.concat(index))
          } else {
            this.charIndexes.set(char, [index])
          }
        }
    );
  }
}

export default Word;