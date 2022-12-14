import * as _ from "lodash";
import axios from "axios";

export const Greeter = async (name: string) => {
  const res = await axios({
    method: "GET",
    url: "https://www.ship24.com/metadata",
  });

  console.log("res ", JSON.stringify(res.data));

  const randomNames = ["chheuffng", "chheung2", "chheung3"];

  return `Hello ${_.sample(randomNames)}`;
};
