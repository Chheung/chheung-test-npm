import * as _ from "lodash";

export const Greeter = (name: string) => {
  const randomNames = ["chheung", "chheung2", "chheung3"];

  return `Hello ${_.sample(randomNames)}`;
};
