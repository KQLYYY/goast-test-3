import { faker } from "@faker-js/faker";

export type Person = {
  firstName: string;
  lastName: string;
  status: "relationship" | "complicated" | "single";
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};

export function makeData(len: number) {
  return range(len).map((): Person => {
    return newPerson();
  });
}
