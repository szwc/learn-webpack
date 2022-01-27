import { getNameStr } from "./utils/name";
import _ from "lodash";
const tmpArr = [
  {
    name: "carrot",
    age: 25,
    id: "zhangsan",
  },
  {
    name: "beijita",
    age: 27,
    id: "lisi",
  },
  {
    name: "bike",
    age: 19,
    id: "wangwu",
  },
];
let nameArr = tmpArr.map((item) => item.name);
let namestr = getNameStr(nameArr);
document.getElementById("app-m").innerHTML =
  "hello app" + namestr + _.join(["Hello", "webpack"], " ");
