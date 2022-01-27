// import _ from "lodash";
import { getProductName } from "./varient";
export function getNameStr(arr) {
  //   return _.join(arr, "-");
  return "name" + getProductName();
}
