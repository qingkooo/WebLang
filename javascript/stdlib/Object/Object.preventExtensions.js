import { demo, log, warn, dir, line } from "../util.js";

/* Object.preventExtensions(obj)
@param {Object} obj
@return {Object} obj(本尊)
语义：阻止扩展对象的自身属性，即无法增加自身属性（prototype属性不受影响）。其自身所有属性的属性描述符不变
说明：
- 无法添加自身属性
cases：
- 无法增加自身属性
- 可以删除自身属性
- 可以修改自身属性
*/

demo(`实验：属性描述符集没有变化`)(() => {
  let o = { name: "o" };
  Object.preventExtensions(o);
  log(Object.getOwnPropertyDescriptors(o)); // 未修改属性描述符
});

demo(`实验：属性增删改测试`)(() => {
  let o = { name: "o" };
  // 增
  try {
    o.age = 18;
  } catch (e) {
    log(`无法添加属性`);
  }
  // 改
  o.name = "oo";
  log(`执行 o.name="oo"`, o.name === "oo");
  // 删
  delete o.age;
  log(`执行 delete o.age`, o.age === void 0);
});

demo(`实验：prototyped对象属性修改测试`)(() => {
  let o = { name: "o" };
  let proto = { name: "proto" };
  // 增
  try {
    Object.setPrototypeOf(o, proto);
    log(`可以修改prototype属性`);
  } catch (e) {
    log(`无法修改prototype属性`);
  }
  log(Object.getPrototypeOf(o));
});
