import { demo, log, dir, line } from "../util.js";

/* Object.freeze(obj)
@param {Object} obj
@return {Object} obj(本尊)
语义：冻结对象,使其无法增、删、改属性(可写、可配置)、无法枚举(可枚举)，只可以读。对象的这种状态也成为Not extensible(不可扩展性)
说明：属性描述符集的writable、configurable均置为false
cases:
- 返回值为参数obj本尊
- 属性描述符集的writable、configurable均为false
- 3种状态的关系：freeze > seal > disExtensible，前者包含后者，即freeze态时也是sealed和disExtensible态
*/

demo(`实验：返回值为参数本尊`)(() => {
  let o = { name: "o", age: 18 };
  let o1 = Object.freeze(o);
  log(`o === o1`, o === o1);
});

demo(`实验：属性描述符集的writable、configurable均为false`)(() => {
  let o = { name: "o", age: 18 };
  log(`freeze之前`, Object.getOwnPropertyDescriptors(o));
  Object.freeze(o);
  log(`freeze之后`, Object.getOwnPropertyDescriptors(o));
});

demo(`实验：证明3种状态的关系：freeze > seal > disExtensible`)(() => {
  let proto = { name: "proto" };
  let freeze = { name: "freeze" };
  let seal = { name: "seal" };
  let preventExtensible = { name: "preventExtensible" };
  Object.freeze(freeze);
  Object.seal(seal);
  Object.preventExtensions(preventExtensible);

  // freeze status object
  log(
    Object.isFrozen(freeze), // true，冻结态
    Object.isSealed(freeze), // true，固化态
    Object.isExtensible(freeze) // false，不可扩展态
  );
  // seal statue object
  log(Object.isFrozen(seal), Object.isSealed(seal), Object.isExtensible(seal)); // false,true,false
  // 非冻结态，固化态，不可扩展态

  // preventExtensible status object
  log(
    Object.isFrozen(preventExtensible), // false，非冻结态
    Object.isSealed(preventExtensible), // false，非固化态
    Object.isExtensible(preventExtensible) // false，不可扩展态
  );
});
