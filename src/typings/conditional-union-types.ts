/**
 * Every person has a name
 * We cannot ask a woman her age and
 * we cannot ask a man his salary
 *
 * Only woman will have the salary property
 * Only man will have the age property
 */

export type Person = {
  name: string;
} & (
  | {
      sex: "female";
      salary: number;
    }
  | {
      sex: "male";
      age: number;
    }
);

const person1: Person = {
  sex: "female",
  name: "Jane Doe",
  salary: 3000,
};

const person2: Person = {
  sex: "male",
  name: "John Doe",
  age: 30,
};

type BasePerson = {
  name: string;
};

type Female = {
  sex: "female";
  salary: number;
};

type Male = {
  sex: "male";
  age: number;
};

export type Person2 = BasePerson & (Female | Male);

const person3: Person2 = {
  sex: "female",
  name: "Jane Doe",
  salary: 3000,
};

const person4: Person2 = {
  sex: "male",
  name: "John Doe",
  age: 30,
};

export type Person3 = Female | Male;

const person5: Person3 = {
  sex: "female",
  salary: 3000,
};

const person6: Person3 = {
  sex: "male",
  age: 30,
};
