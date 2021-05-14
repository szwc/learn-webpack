require('./main.css')
import './src/style/index.scss'
import {Animal} from "./src/Animal/index";
import { testTs } from "./src/test/index.ts";
// 通过 CommonJS 规范导入 show 函数
// debugger
console.log('xisoijfsdf fs');
const show = require('./show.js');
const Tiger = new Animal('tiger')
testTs('ts test')
console.log(Tiger.getSkill());
console.log(Tiger);
// 执行 show 函数
show('Webpack');