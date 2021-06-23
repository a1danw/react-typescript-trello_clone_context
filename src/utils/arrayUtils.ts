type Item = {
  id: string;
};

// get item position in the array with its id
export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};

export function overrideItemAtIndex<T>(
  array: T[],
  newItem: T,
  targetIndex: number
) {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }

    return newItem;
  });
}
// Generics

// T - Just a variable - stands for the generic type that will be passed in to the function
// All generic data types are written inside <>
// we define <T> then we can use it - <T> automatically captures whatever item we pass in to the function
// when we return the function T will know what properties are on an object for example
// we can explicitly set <T> by giving it an interface

// const last = (arr: Array<number>) => {
//   return arr[arr.length - 1];
// };

// LAST 2 ARGUMENTS ARE MEAN THE SAME THING

// We can explicitly say where returning T but dont have too - ts infers this automatically
// const last = <T>(arr: Array<T>): T => {
//     return arr[arr.length - 1];
//   };

// const last = <T>(arr: T[]) => {
//   return arr[arr.length - 1];
// };

// const l = last([1, 2, 3]);
// const l2 = last(["a", "b", "c"]);
