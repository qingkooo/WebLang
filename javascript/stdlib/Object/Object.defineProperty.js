import { demo, log, dir, line } from "../util.js";

/* Object.defineProperty(obj, prop, descriptor)
@param {Object} obj,被修改的对象
@param {String|Symbol} prop,属性名
@param {Descriptor Object} descriptor,属性描述符数据结构
@return {Object} obj(本尊)
语义：定义对象实例的属性，使用属性描述符
说明：
- 返回obj本尊
- descriptor（属性描述符）每一项的作用:
  - writable:可写属性,默认值为true
  - enumerable:可枚举属性,默认值为true
  - configurable:可配置属性,默认值为true
      - 该属性无法删除。
      - 一旦设置为false，无法再次修改。
- 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
*/
demo(`实验：descriptor的默认值`)(() => {
  let o = { name: "o" };
  log(`descriptor的默认值为`, Object.getOwnPropertyDescriptors(o));
});
demo(`实验:返回值即obj本尊`)(() => {
  let o = { name: "o" };
  let result = Object.defineProperty(o, "test", {
    value: "propValue",
    writable: true, // 可写权限
    enumerable: true, // 可枚举权限
    configurable: true, // 可配置权限
  });
  log(`assert:o===result`, o === result);
  log(`属性描述符：`, Object.getOwnPropertyDescriptor(o, "test"));
  log(`该对象的test属性，是否可枚举：`, o.propertyIsEnumerable("test"));
});

demo(`实验:writable可写权限`)(() => {
  let o = Object.create(null);
  Object.defineProperty(o, "test", {
    value: "写不进去",
    writable: false,
  });
  // 尝试写入
  try {
    o.test = "写的进去";
  } catch (e) {}
  log(o.test);
});

demo(`实验:enumerable枚举权限`)(() => {
  let o = { name: "o" };
  Object.defineProperty(o, "test", {
    value: "test",
    enumerable: false,
  });
  // 尝试枚举
  for (let i in o) log(i); // 无法枚举
  // 尝试枚举
  log(Object.keys(o)); // []，无法枚举

  // 访问自身属性
  log(o.name); // 可以取出
  log(o["name"]); // 可以取出

  // 查询自身属性
  log(o.hasOwnProperty("test")); // true，可以查询
});

demo(
  `实验：configurable配置权限`,
  `1, 若设置为false，则无法删除属性（但仍然可以增加或修改属性）`,
  `2，一旦设置为false,则无法再次对属性描述符进行修改`
)(() => {
  let o = Object.create(null);
  Object.defineProperty(o, "test", {
    value: "test:",
    writable: true,
    enumerable: true,
    configurable: false,
  });
  // 尝试增加属性，成功
  try {
    o.test = true;
    log("增加属性成功");
  } catch (e) {
    log("增加属性失败:", e.message);
  }
  // 尝试修改属性，成功
  try {
    o.test = true;
    log("修改属性成功");
  } catch (e) {
    log("修改属性失败:", e.message);
  }
  // 尝试删除属性，失败
  try {
    delete o.test; // 无效
    log("删除属性成功！");
  } catch (e) {
    log("删除属性失败:", e.message);
  }

  // 尝试修改属性描述符，失败
  try {
    Object.defineProperty(o, "test", {
      configurable: true,
    });
    log("修改属性描述符成功");
  } catch (e) {
    log("修改属性描述符失败:", e.message); // 抛出错误
  }
});
