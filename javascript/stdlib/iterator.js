import { demo, log, warn, err, dir, line, typeis } from "./util.js";

/* Iterator
背景：为不同数据结构提供统一的接口机制,任何数据结构只要部署Iterator接口，就可以拥有遍历能力
特征：
- 
已经部署了Iterator接口的数据结构：
- String
- Array
- Object
- Map
- Set
 */

demo(
  `实验：使用Iterator接口来遍历数据结构`,
  `String.prototype[@@iterator]()`,
  `Array.prototype[@@iterator]()`,
  `Object.prototype[@@iterator]()`,
  `Map.prototype[@@iterator]()`,
  `Set.prototype[@@iterator]()`,
  "结论：不同平面字符都可以正确读取",
  "结论：Object.prototype上没有部署iterator接口"
)(() => {
  // 定义
  const str = `A𝌆B\rC\nD\tE`;
  const arr = ["A", "𝌆", "\r", "B", "\n", "D", "\t", "E"];
  const obj = { name: "obj", age: 18 };
  const map = new Map();
  map.set("a", 1);
  map.set("b", 2);
  map.set("c", 3);
  const set = new Set(arr);

  function print(data) {
    const type = Object.prototype.toString.call(data).slice(8, -1);
    console.log(`++${type}++`);
    const iterator = data[Symbol.iterator]();
    let item = iterator.next();
    while (!item.done) {
      console.log(item.value);
      item = iterator.next();
    }
  }
  print(str);
  print(arr);
  // print(obj); // Object.prototype上没有部署iterator接口
  print(map);
  print(set);
});

demo(`简化：部署了iterator接口的数据结构，可以使用for..of来简化使用`)(() => {
  function print(data) {
    for (const value of data) {
      console.log(value);
    }
  }
  const str = `A𝌆B\rC\nD\tE`;
  const arr = ["A", "𝌆", "\r", "B", "\n", "D", "\t", "E"];
  const map = new Map();
  map.set("a", 1);
  map.set("b", 2);
  map.set("c", 3);
  const set = new Set(arr);
  print(str);
  print(arr);
  print(map);
  print(set);
});
