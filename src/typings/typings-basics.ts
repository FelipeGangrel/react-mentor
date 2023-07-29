/**
 * Types and interfaces can be used to define the shape of an object.
 *
 * Both types and interfaces can be used together.
 */

export interface Pet {
  name: string;
}

export interface Dog extends Pet {
  pedigree: string;
}

export type Turtle = Pet & {
  age: number;
};

export type Branded = {
  brand: string;
};

export type Vehicle = {
  type: "ground" | "air" | "water";
};

export type Automobile = Vehicle &
  Branded & {
    topSpeed: number;
  };

export interface Ship extends Vehicle, Branded {
  topSpeed: number;
}
