
import {DayType} from "./types";
import {SentenceType} from "./types";

export const days = [...Array(100).keys()].map(i => {
  const startIdx = i * 10;
  return {
    key: i + 1,
    label: 'Day ' + (i + 1),
    ids: [
      startIdx + 1, startIdx + 2, startIdx + 3, startIdx + 4, startIdx + 5,
      startIdx + 2, startIdx + 3, startIdx + 4, startIdx + 5, startIdx + 6,
      startIdx + 3, startIdx + 4, startIdx + 5, startIdx + 6, startIdx + 7,
      startIdx + 4, startIdx + 5, startIdx + 6, startIdx + 7, startIdx + 8,
      startIdx + 5, startIdx + 6, startIdx + 7, startIdx + 8, startIdx + 9,
      startIdx + 6, startIdx + 7, startIdx + 8, startIdx + 9, startIdx + 10,
      startIdx + 7, startIdx + 8, startIdx + 9, startIdx + 10, startIdx + 1,
      startIdx + 8, startIdx + 9, startIdx + 10, startIdx + 1, startIdx + 2,
      startIdx + 9, startIdx + 10, startIdx + 1, startIdx + 2, startIdx + 3,
      startIdx + 10, startIdx + 1, startIdx + 2, startIdx + 3, startIdx + 4,
    ]
  }
}) as DayType[];

const f1 = [...Array(1000).keys()].map((_, i) => {
  const title = 'Lorem Ipsum ' + i;
  return {
    id: i + 1,
    title,
    keyword: title.toLowerCase()
  };
});
export const all : SentenceType[] = f1;