/**
 * Types and interfaces can be used to define the shape of an object.
 *
 * Both types and interfaces can be used together.
 */

interface Pet {
  name: number;
}

interface Dog extends Pet {
  pedigree: string;
}

type Turtle = Pet & {
  age: number;
};

type Branded = {
  brand: string;
};

type Vehicle = {
  type: "ground" | "air" | "water";
};

type Automobile = Vehicle &
  Branded & {
    topSpeed: number;
  };

interface Ship extends Vehicle, Branded {
  topSpeed: number;
}
