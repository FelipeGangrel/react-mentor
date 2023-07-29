/**
 * The type we pass via generics to the User type will be used to define the type of the id property.
 */
export type User<IdType> = {
  id: IdType;
};

export const userWithStringId: User<string> = {
  id: "1",
};

export const userWithNumberId: User<number> = {
  id: 1,
};

/**
 * We can have more than one generic type.
 */
export interface Person<BirthdayType, RegisterType> {
  birthday: BirthdayType;
  register: RegisterType;
}

export const person1: Person<Date, number> = {
  birthday: new Date(),
  register: 1,
};

/**
 * We can define default types for generics.
 */
export type Message<ContentType = string> = {
  content: ContentType;
};

export const message1: Message = {
  content: "Hello",
};

export const message2: Message<number> = {
  content: 1,
};
