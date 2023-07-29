export type User = {
  name: string;
  id: number;
};

// this is fine because it satisfies the User type
export const user1: User = {
  name: "John",
  id: 1,
};

// this is also fine because it satisfies the User type
export const user2 = {
  name: "John",
  id: 1,
} satisfies User;

/**
 * this is dangerous and can lead to bugs
 *
 * If we try to access the id property we will get an error
 */
export const user3 = {
  name: "John",
} as User;

/**
 * This is kinda sus but it works
 *
 * Here we are telling the compiler that this object is
 * of type User (by using the `as` keyword)
 *
 * The compiler don`t yell at us because the object has all the properties
 * needed by the User type (even if the object has more properties that the type needs).
 *
 * This is not recommended because it can lead to bugs.
 */
export const user4 = {
  name: "John",
  id: 1,
  phoneNumber: "123456789",
  getAddress() {
    return "Address";
  },
} as User;
