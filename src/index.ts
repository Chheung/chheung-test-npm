import * as _ from "lodash";
import * as axios from "axios";

export const Greeter = (name: string) => {
  const randomNames = ["chheung", "chheung2", "chheung3"];

  return `Hello ${_.sample(randomNames)}`;
};
