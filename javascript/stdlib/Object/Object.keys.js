import { demo, log, dir, line } from "../util.js";

/* Object.keys(obj)
@param {Object} obj
@return {Array} 对象自身可枚举属性的键名数组
语义：取键集合
说明：
相对于Object.values
- 支持String类型
- 不支持Symbol类型
- 属性描述符的enumerable敏感
cases:
*/

demo(`实验：仅支持String类型的key`)(() => {
  let o = { name: "o", age: 18 };
  const s1 = Symbol("s1");
  o[s1] = "s1";
  log(``, Object.keys(o));
});

demo(`实验：对可枚举属性敏感`)(() => {
  let o = { name: "o", age: 18 };
  Object.defineProperties(o, {
    name: { enumerable: false },
  });
  log(`name属性的属性描述符enumerable置为false之后`, Object.keys(o));
});
