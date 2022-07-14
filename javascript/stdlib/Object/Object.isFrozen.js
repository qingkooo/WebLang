import { demo, log, dir, line } from "../util.js";

/* Object.isFrozen(obj)
@param {Object} obj
@return {Boolean} 
语义：判断实例的所有属性是否被冻结（freeze）,或者说是对象不可扩展(not extensibles)含原型对象不可更改
说明：
对应着Object.freeze(obj)
- 无法通过属性描述符去模拟freeze，因为是对象被限制而非属性被限制
*/
demo(``)(() => {
  let o = { name: "o", age: 18 };
  Object.freeze(o);
  log(Object.getOwnPropertyDescriptors(o));
  log(Object.isFrozen(o)); // true
});
