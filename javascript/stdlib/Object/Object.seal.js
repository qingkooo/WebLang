import { demo, log, warn, dir, line } from "../util.js";

/* Object.seal(obj)
@param {Object} obj
@return {Object} obj(本尊)
语义：固化对象，使其固有属性无法增、删。其所有属性描述符的configurable置为false
说明：
- 其所有属性的属性描述符置为configurable: false
- 对象不能删除属性（这是configurable: false的特性）
- 对象不能增加属性
cases：
*/

demo(`实验：其所有属性的属性描述符configurable: false`)(() => {
  let o = { name: "o" };
  log(`seal之前`, Object.getOwnPropertyDescriptors(o));
  Object.seal(o);
  log(`seal之后`, Object.getOwnPropertyDescriptors(o));
});

demo(`实验：seal对象后的特性`)(() => {
  let o = { name: "o" };
  Object.seal(o);
  // 不可以删属性
  try {
    delete o.name;
  } catch (e) {
    log(`不可以删除自身属性`);
    warn(e.message);
  }
  // 不可以增加属性
  try {
    o.age = 18;
    log(`增加o.age属性`, o.age);
  } catch (e) {
    log(`不可以增加自身属性`);
    warn(e.message);
  }
  // 可以修改属性
  try {
    o.name = "oo";
    log(`可以修改o.age属性`, o.name);
  } catch (e) {
    warn(e.message);
  }
});
