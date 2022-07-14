import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/* Object(any)/new Object(any) ,产生一个包装类对象（object wrapper）
@param {Any} 任何类型的数据结构
@return {Object} 对象类型
语义：包装任意数据类型至对象类型
特性：
- 不改变参数对象
- 参数为原始数据类型时，包装原始数据类型为对象类型
- 参数为非原始数据类型时，返回该参数对象本尊
*/

demo(`实验：参数为原始类型时，返回包装类对象`)(() => {
  const _null = null;
  const _undefined = void 0;
  const _number = 1;
  const _bigInt = 1n;
  const _string = "1";
  const _boolean = !0;
  const _symbol = Symbol(1);
  log("new Object(_null)", new Object(_null));
  log("new Object(_undefined)", new Object(_undefined));
  log("new Object(_number)", new Object(_number));
  log("new Object(_bigInt)", new Object(_bigInt));
  log("new Object(_string)", new Object(_string));
  log("new Object(_boolean)", new Object(_boolean));
  log("new Object(_symbol)", new Object(_symbol));
});
demo(`实验：参数为非原始类型时，返回该参数对象本尊`)(() => {
  const _object = { name: 1 };
  const _array = [];
  const _function = function () {};
  log("new Object(_object)===_object", new Object(_object) === _object);
  log("new Object(_array)===_array", new Object(_array) === _array);
  dir("new Object(_function)===_function", new Object(_function) === _function);
});
demo(`实验：Object(any)和new Object(any)的行为一致`)(() => {
  const obj = Object.create(null, { name: { value: "obj" } });
  log("obj === Object(obj)", obj === Object(obj));
  log("obj === new Object(obj)", obj === new Object(obj));
});
