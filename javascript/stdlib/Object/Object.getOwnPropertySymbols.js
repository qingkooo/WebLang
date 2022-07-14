import { demo, log, dir, line } from "../util.js";

/* Object.getOwnPropertySymbols(obj)
@param {Object} obj
@return {Symbol Array} 
语义：获取自身symbol属性的数组
特性：
与Object.getOwnPropertyNames相反，只获取symbol属性，即
- 无法获取String的属性名（只获取symbol属性名）
- 能够获取不可枚举属性
*/

demo(`实验：不会获取原型链上的属性`)(() => {
  const s1 = Symbol("s1"),
    s2 = Symbol("s2");
  const proto = { s1: 1, proto: true };
  let o = Object.create(proto);
  o[s2] = 2;
  o["o"] = "O";
  log(`assert:自身属性只有s2：`, Object.getOwnPropertySymbols(o));
});

demo(`实验：无法获取String属性`)(() => {
  let o = Object.create(null);
  o.a = 1;
  o[Symbol("b")] = "b";
  log(`assert:自身symbol属性只有b：`, Object.getOwnPropertySymbols(o));
});
