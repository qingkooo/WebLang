import { demo, log, dir, line } from "../util.js";

/* Object.entries(obj)
@param {Object} obj
@return {Array Array} 对象自身可枚举属性的键值对数组
语义：转换对象为条目
说明：
- 数据结构为[[key,value],...]
- 浅拷贝
- 若obj为普通对象，条目属性的排序与遍历数组的先后顺序一致
- 若obj为arrayLink，那么会将key进行升序排列
cases:
*/

demo(`返回的数据结构`)(() => {
  let obj = { foo: 1, bar: 2, baz: 3 }; // object
  let arrayLink = { 2: "bar", 1: "foo", 3: "baz" }; // arrayLinkObject
  log(Object.entries(obj));
  log(Object.entries(arrayLink));
});

demo(`实验:证明是浅拷贝`)(() => {
  let obj = { foo: { age: 18 }, bar: 2, baz: 3 }; // object
  let arrayLink = { 2: { age: 18 }, 1: "foo", 3: "baz" }; // arrayLinkObject
  obj.foo.age = 88;
  arrayLink[2].age = 88;
  log(Object.entries(obj));
  log(Object.entries(arrayLink));
});
