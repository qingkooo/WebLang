import { demo, log, dir, line } from "../util.js";

/* Object.fromEntries(entries)
@param {Array} entries,键值对数组
@return {Object}
语义：转换条目为对象
说明：
与Object.entries相对应
- 数据结构为[[key,value],...]
- 浅拷贝
- 条目属性的顺序与对象属性的顺序一致？
cases:
*/

demo(`test:返回的数据结构`)(() => {
  let obj = { foo: 1, bar: 2, baz: 3 }; // object
  let arrayLink = { 2: "bar", 1: "foo", 3: "baz" }; // arrayLinkObject
  // 转为entries
  const entries1 = Object.entries(obj);
  const entries2 = Object.entries(arrayLink);
  // 转为object
  log(``, Object.fromEntries(entries1));
  log(``, Object.fromEntries(entries2));
});
