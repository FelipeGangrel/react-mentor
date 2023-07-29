/**
 * Using generics
 */

// generates a random number between min and max
function getRandomNumber(min: number, max: number): number {
  const difference = max - min;
  const random = Math.random();
  return Math.floor(random * (difference + 1)) + min;
}

// returns a random type safe element from an array
function getRandomElement<T>(array: T[]): T {
  const min = 0;
  const max = array.length - 1;
  const randomIndex = getRandomNumber(min, max);
  return array[randomIndex];
}

const names = ["John", "Jane", "Joe", "Jill", "Jack"];
const numbers = [1, 2, 3, 4, 5, null, false];

const randomName = getRandomElement(names);
const randomNumber = getRandomElement(numbers);
