// This function accepts anything and prints it
function printSomething(something: unknown) {
  console.log(something);
}

export type User = {
  id: number;
  name: string;
};

/**
 * Imagine we are trying to pass an object with the type User as the parameter
 * to our `printSomething` function.
 */

/**
 * Okay. We provided an object that complies with the type User, but notice
 * that even we are trying our best to not mess things up...
 */
printSomething({ id: 1, name: "John Doe" });

/**
 * We cannot make sure we will remember the correct shape of an user.
 *
 * So, we have two safe alternatives.
 *
 * One could be to define the user as a variable and provide
 * the correct type to it
 */
const user: User = {
  id: 1,
  name: "John Doe",
};

// And now we can use it
printSomething(user);

/**
 * Another one could be to use the `satisfies` keyword to safely type
 * the object on its left side
 */
printSomething({
  id: 1,
  name: "John Doe",
} satisfies User);
