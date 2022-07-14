import { demo, log, dir, line } from "../util.js";

/* Object.getPrototypeOf(obj)
@param {Object} obj
@return {Object} 原型对象(本尊)
语义：从实参（对象）中获取原型（对象）
说明：该原型对象并非深拷贝，而是原型对象本尊
*/

demo(
  `Object.getPrototypeOf(obj) 获得参数（对象）的原型对象`,
  `实验：返回值是引用类型（而非深拷贝）`
)(() => {
  let a = { name: "a" },
    b = Object.create(a),
    leaf = Object.create(b);
  b.name = "b";
  leaf.name = "leaf";
  log("leaf和它的原型：", leaf, Object.getPrototypeOf(leaf));
  log("a和它的原型：", a, Object.getPrototypeOf(a));
  line();
  log("leaf的原型是b本尊吗：", Object.getPrototypeOf(leaf) === b);
  log("b的原型是a本尊吗：", Object.getPrototypeOf(b) === a);
});

/* Object.setPrototypeOf(obj,newProto)
@param {Object} obj
@param {Object} newProto 新的原型对象
@return {Object} 实参obj（本尊）
语义：对实参（对象）设置新的原型（对象）
说明：
  - 会有性能问题: 当修改原型链中某节点的原型时，会向下遍历和修改所有子节点。
  - 应尽量使用Object.create创建新对象，让GC回收老对象
*/

demo(
  `Object.setPrototypeOf(obj,newProto) 修改参数（对象）的原型对象`,
  `实验：返回值即参数对象本尊`
)(() => {
  // 创建实例
  let a = { name: "a" },
    b = Object.create(a),
    leaf = Object.create(b),
    newProto = { name: "newProto" };
  b.name = "b";
  leaf.name = "leaf";

  log("leaf", leaf);
  line();
  log(
    "返回值是实参leaf本尊吗？",
    Object.setPrototypeOf(leaf, newProto) === leaf
  ); // true
});
