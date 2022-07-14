import { demo, log, warn, dir, line } from "../util.js";

/* Object.isExtensions(obj)
@param {Object} obj
@return {Object} obj(本尊)
语义：对象是否被施加过 preventExtensions 方法
说明：
- 是对象被限制了扩展性，而非属性。因此无法通过属性描述符去模拟preventExtensions
cases：
*/

demo(`实验：实施preventExtensions后`)(() => {
  let o = { name: "o" };
  Object.preventExtensions(o);
  log(`o对象具备可扩展态吗`, Object.isExtensible(o));
});

demo(`实验：属性描述符无法模拟preventExtensions`)(() => {
  let o = { name: "o" };
  Object.defineProperties(o, { name: { configurable: false } });
  log(`o对象具备可扩展态吗`, Object.isExtensible(o));
});
