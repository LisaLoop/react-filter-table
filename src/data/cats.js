/*
type CatColoring =
  "Tabby" |
  "Tortoiseshell" |
  "Tuxedo" |
  "Calico";

type CatMood =
  "Hungry" |
  "Annoyed" |
  "Angry" |
  "Horny" |
  "Impatient" |
  "Sleepy";

type CatGonads =
  "Missing" |
  "Intact";

type CatActivity =
  "Sleeping" |
  "Eating" |
  "Grooming" |
  "Purring" |
  "Shedding";

type Cat {
  name: string;
  age: number;
  coloring: CatColoring;
  mood: CatMood;
  gonads: CatGonads;
  currentActivity: CatActivity;
}
*/

export default [
  { name: "Bu", age: 7, coloring: "Tabby", mood: "Sleepy", gonads: "Missing", currentActivity: "Shedding"},
  { name: "Lefty", age: 12, coloring: "Tuxedo", mood: "Angry", gonads: "Missing", currentActivity: "Sleeping"},
  { name: "Hissy", age: 15, coloring: "Tortoiseshell", mood: "Angry", gonads: "Missing", currentActivity: "Sleeping"},
  { name: "Scratchy", age: 25, coloring: "Tuxedo", mood: "Angry", gonads: "Intact", currentActivity: "Shedding" },
];