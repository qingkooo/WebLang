import { demo, log, dir, line } from "../util.js";

/* Object.create(proto[, propertiesObject])
@param {Object} proto
@return {Object} 新对象
语义：创造新对象，以实参（对象）为原型对象
说明：propertiesObject数据结构，见/javascript/stdlib/dataStructure.md
*/

demo(`实验：proto参数为null时，创建出一个没有原型对象的新对象`)(() => {
  const obj = Object.create(null);
  log("Object.getPrototypeOf(Object.create(null))", Object.getPrototypeOf(obj));
});
demo(`实验：proto参数为对象时，创建出一个以参数对象为原型对象的新对象`)(() => {
  const foo = { name: "foo" };
  log("Object.create(foo)", Object.create(foo));
});
demo(
  `实验：propertiesObject参数的使用`,
  `给实例添加属性`
)(() => {
  const foo = { name: "foo" };
  const propertiesObject = {
    a: {
      value: "a",
      writable: true,
      configurable: true,
      enumerable: true,
    },
    b: {
      configurable: true,
      configurable: true,
      get: function () {
        return "b-get";
      },
      set: function (value) {
        log("b-set:", value);
      },
    },
  };
  log(
    "Object.create(foo,propertiesObject)",
    Object.create(foo, propertiesObject)
  );
});
