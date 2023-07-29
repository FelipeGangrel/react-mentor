/**
 * What are React components?
 *
 * React components are functions that returns an object compatible with the type ReactNode.
 */

import { useCallback } from "react";

function MyComponent1() {
  return null;
}

function MyComponent2() {
  return <div>MyComponent2</div>;
}

/**
 * Working with typed return
 */

// This is a invalid component because it can return a function
const MyComponent3 = (): React.ReactNode => {
  const date = new Date();

  const myFunction = () => {
    return null;
  };

  if (date.getDay() === 0) {
    return myFunction;
  }

  return <div>MyComponent3</div>;
};

/**
 * Working with typed properties
 */

type MyComponentProps = {
  value: string;
};

function MyComponent4(props: MyComponentProps) {
  const date = new Date();

  if (date.getDay() === 0) {
    return null;
  }

  return <div>{props.value}</div>;
}

const MyComponent5 = (props: MyComponentProps) => {
  return <div>{props.value}</div>;
};

// this is an invalid component because it can return an object
const MyComponent6: React.FC<MyComponentProps> = (props) => {
  const date = new Date();

  if (date.getDay() === 0) {
    return { props: null };
  }

  return <div>{props.value}</div>;
};

const MyComponent7 = (name: string) => {
  return <div>Hello: {name}</div>;
};

const MyComponent8 = ({ name, message }: { message: string; name: string }) => {
  return (
    <div>
      Hello: {name}, {message}
    </div>
  );
};

const MyComponent9 = () => {
  // you can define your typing like we did here, bt is kinda messy
  const getMessage = useCallback(({ name }: { name: string }) => {
    return `Hello: ${name}`;
  }, []);

  return <div>{getMessage({ name: "John" })}</div>;
};
