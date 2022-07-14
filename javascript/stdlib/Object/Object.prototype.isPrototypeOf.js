import { demo, log } from "../util.js";

/* Object.prototype.isPrototypeOf(obj)
@param {Object} 参数对象
@return {Boolean} 
语义：测试本对象是否存在于实参（对象）的原型链上
*/

demo(
  `Object.prototype.isPrototypeOf(obj)`,
  `制造一条原型链`,
  `在各个节点上，传入obj3实参进行测试`
)(() => {
  const other = { name: "other" },
    obj1 = { name: "obj1" },
    obj2 = Object.create(obj1, {
      name: {
        value: "obj2",
      },
    }),
    obj3 = Object.create(obj2, {
      name: {
        value: "obj3",
      },
    });

  log(obj2.isPrototypeOf(obj3)); // true
  log(obj1.isPrototypeOf(obj3)); // true
  log(other.isPrototypeOf(obj3)); // false
});
