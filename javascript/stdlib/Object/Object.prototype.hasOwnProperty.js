import { demo, log, dir, line } from "../util.js";

/* Object.prototype.hasOwnProperty(prop)
@param {String} prop
@return {Boolean} 
语义：判断实例的自身属性名中，是否有prop
说明：
- 支持String类型
- 支持Symbol类型
- 与属性描述符无关
*/

demo(`实验：symbol和不可枚举属性`)(() => {
  let obj = { name: "obj" };
  const s1 = Symbol("symbol");
  obj[s1] = "symbol";
  obj["unenumerable"] = "unenumerable";
  Object.defineProperty(obj, "unenumerable", {
    enumerable: false,
  });

  log(obj.hasOwnProperty("name")); // true
  log(obj.hasOwnProperty(s1)); // true
  log(obj.hasOwnProperty("unenumerable")); // true
});
