/**
 * any: Any type goes here
 * unknown: Any type that is not known yet
 * never: A type that never happens
 */

/** Any can be of ANY possible type */
export const anyObject: any = { name: "John" };
export const anyNumber: any = 1;
export const anyString: any = "John";
export const anyBoolean: any = true;

/** Unknown is for when we don`t know the type yet */
export const unknownObject: unknown = { name: "John" };
export const unknownNumber: unknown = 1;
export const unknownString: unknown = "John";
export const unknownBoolean: unknown = true;

// this is not possible
export const never: never = 1;

export function doSomething(value: unknown) {
  if (typeof value === "number") {
    return console.log("value is a number");
  }

  if (typeof value === "string") {
    return console.log("value is a string");
  }

  if (typeof value === "boolean") {
    return console.log("value is a boolean");
  }

  if (Array.isArray(value)) {
    return console.log("value is an array");
  }

  return console.log("value is of unknown type");
}

export function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

export type Size = "small" | "medium" | "large";

export function selectSize(size: Size) {
  switch (size) {
    case "small":
      return console.log("small");
    case "medium":
      return console.log("medium");
    default:
      return throwError(`the size ${size} was not expected`);
  }
}
