import { UserDto } from "../types";
import { capitalize } from "./string";

export const getUserFullName = (user: UserDto) => {
  const { lastName, firstName } = user;

  return [capitalize(firstName), capitalize(lastName)].join(" ");
};
