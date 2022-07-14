import { demo, log, warn, dir, line } from "../util.js";

/* Object.isSealed(obj)
@param {Object} obj
@return {Object} obj(本尊)
语义：对象是否被施加过 seal 方法
说明：
cases：
*/

demo(`实验：实施seal之后`)(() => {
  let o = { name: "o" };
  Object.seal(o);
  log(`o对象被固化了吗`, Object.isSealed(o));
});
