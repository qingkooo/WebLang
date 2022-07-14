import { demo, log, dir, line } from "../util.js";

/* Object.getOwnPropertyDescriptor(obj, prop)
@param {Object} obj
@param {String} prop
@return {Descriptor Object}
语义：获得obj.prop的属性描述符
说明：
- 支持Symbol类型属性
- 支持String类型属性
*/

/* Object.getOwnPropertyDescriptors(obj)
@param {Object} obj
@return {Descriptor Object}
语义：获得obj的属性描述符集
说明：
- 支持Symbol类型属性
- 支持String类型属性
*/

demo(`实验:支持String类型prop的属性描述符`)(() => {
  let o = {};
  Object.defineProperty(o, "test", {
    value: "test",
    writable: true,
    enumerable: true,
    configurable: true,
  });
  log(
    `String类型属性的属性描述符：`,
    Object.getOwnPropertyDescriptor(o, "test")
  );
  log(Object.getOwnPropertyDescriptors(o));
});

demo(`实验：支持Symbol类型prop的属性描述符`)(() => {
  let o = {};
  const s1 = Symbol("s1");
  Object.defineProperty(o, s1, {
    value: "test",
    writable: true,
    enumerable: true,
    configurable: true,
  });
  log(`Symbol类型属性的属性描述符：`, Object.getOwnPropertyDescriptor(o, s1));
  log(Object.getOwnPropertyDescriptors(o));
});
