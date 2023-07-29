export type GreeterProps = {
  message?: string;
  name: string;
  age: number;
};

export type Pet = {
  age: number;
};

export type Greeter = (props: GreeterProps) => string | boolean;

export interface AnotherGreeter {
  (props: GreeterProps): string | boolean;
}

export const greeter1: Greeter = ({ message, name, age }) => {
  if (!message) {
    return false;
  }

  return `${message}, your name is ${name} and your age is ${age}`;
};

export const greeter2: AnotherGreeter = ({ message, name, age }) => {
  if (!message) {
    return false;
  }

  return `${message}, your name is ${name} and your age is ${age}`;
};
