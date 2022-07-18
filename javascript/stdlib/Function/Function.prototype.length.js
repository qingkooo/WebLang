import { demo, log, warn, dir, line } from "../util.js";

/* Function.prototype.length
@return {Number} 
语义：形参个数（不含ES6的新语法的形参，比如默认值参数、剩余参数)
说明：
*/

demo(`验证：支持ES5语法的形参，不支持ES6的新语法形参`)(() => {
  const es5 = (a, b, c) => {};
  const es6 = (a, b = 1, ...c) => {};
  log(es5.length); // 3
  log(es6.length); // 0
});

demo(`验证：遇到ES6的新语法形参时，返回前面ES5形参个数`)(() => {
  const es6 = (a, b, c, d = 1, e, f, ...g) => {};
  log(es6.length); // 3
});
