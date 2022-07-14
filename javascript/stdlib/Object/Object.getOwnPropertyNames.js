import { demo, log, dir, line } from "../util.js";

/* Object.getOwnPropertyNames(obj)
@param {Object} obj
@return {String Array} 
语义：获取自身属性的名称数组
特性：
与Object.prototype.hasOwnProperty特性相似，即
- 无法获取symbol属性名
- 能够获取不可枚举属性
*/

demo(`实验：不会获取原型链上的属性`)(() => {
  const proto = { a: 1 };
  let o = Object.create(proto);
  o.b = 2;
  log(`assert:自身属性只有b：`, Object.getOwnPropertyNames(o));
});

demo(`实验：无法获取symbol属性`)(() => {
  let o = Object.create(null);
  o.a = 2;
  o[Symbol("b")] = "b";
  log(`assert:自身属性只有a：`, Object.getOwnPropertyNames(o));
});
