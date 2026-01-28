import { faker } from "@faker-js/faker";

const generateValueOrUndefined = <V>(value: V): V | undefined =>
  faker.datatype.boolean() ? value : undefined;

export { generateValueOrUndefined };
