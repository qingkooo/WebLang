import { demo, log, dir, line } from "../util.js";

/* Object.hasOwn(prop)
@param {String} prop
@return {Boolean} 
语义：判断实例的自身属性名中，是否有prop
说明：
和Object.prototype.hasOwnProperty特性一致，只是原型链的功能迁移到了静态属性上了。
Object.hasOwn用于替代Object.prototype.hasOwnProperty。
- 支持String类型的属性
- 支持Symbol类型的属性
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

  log(Object.hasOwn(obj, "name")); // true
  log(Object.hasOwn(obj, s1)); // true
  log(Object.hasOwn(obj, "unenumerable")); // true
});
