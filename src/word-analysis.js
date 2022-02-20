import { writeToJson } from "./utils.js";
import { wordles, allowedWords } from "./words.js";

function getLetterFreq() {
  const letterMap = initLetterMap();

  for (let wordle of wordles) {
    wordle
      .split("")
      .forEach(char => {
        incrementLetterFreq(letterMap, char)
      }
    );
  }

  console.log(letterMap);
  return letterMap;
}

function incrementLetterFreq(map, char) {
  map.set(char, map.get(char) + 1);
}

function initLetterMap() {
  const letterMap = new Map();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

  for (const letter of alphabet)
    letterMap.set(letter, 0);

  return letterMap;
}

const letterFreqs = getLetterFreq();

writeToJson(Object.fromEntries(letterFreqs), "./data/letterFreqs.json");