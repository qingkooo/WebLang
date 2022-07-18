import { demo, log, warn, dir, line } from "../util.js";

/* Function.prototype.name
@return {String} 
语义：函数声明和函数表达式的名称
说明：匿名函数返回变量名，否则返回函数名
*/

demo(`验证：函数声明和函数表达式的名称`)(() => {
  function a() {}
  const b = function b0() {};
  const c = function () {};
  const d = () => {};
  log(a.name); // a
  log(b.name); // b0
  log(c.name); // c
  log(d.name); // d
});
