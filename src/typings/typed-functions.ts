type GreeterProps = {
  message?: string;
  name: string;
  age: number;
};

type Greeter = (props: GreeterProps) => string | boolean;

interface AnotherGreeter {
  (props: GreeterProps): string | boolean;
}

const greeter1: Greeter = ({ message, name, age }) => {
  if (!message) {
    return false;
  }

  return `${message}, your name is ${name} and your age is ${age}`;
};

const greeter2: AnotherGreeter = ({ message, name, age }) => {
  if (!message) {
    return false;
  }

  return `${message}, your name is ${name} and your age is ${age}`;
};
