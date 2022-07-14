import { demo, log, dir, line } from "../util.js";

/* Object.assign(target,...source)
@param {Object} target object
@param {Object} source object
@return {Object} modified target object
语义：将source（源对象）（顺序为自左向右）的可枚举属性分配给target（目标对象）
说明：
- target参数对象会被修改
- return target对象本尊
- ...source自左向右逐个对象作为源对象
- 只有枚举属性可以被分配给target
- 浅拷贝
- 若发生错误则立即返回target对象，错误产生之前的操作都有效
问题：
- returnObject的属性顺序是什么
*/

demo(`实验：返回值即target参数本尊`)(() => {
  let target = {};
  log(`断言：target和返回值全等`, target === Object.assign(target, { a: 1 }));
});
demo(`实验：...source自左向右逐个作为源对象`)(() => {
  let source1 = { name: "s1", source1: true };
  let source2 = { name: "s2", source2: true };
  log(
    `断言：右侧源对象的属性将覆盖左侧源对象的属性`,
    Object.assign({}, source1, source2)
  );
});
demo(`实验：分配来的属性为浅拷贝`)(() => {
  let source = { name: "source", prop: { value: 1 } };
  let newObj = Object.assign({}, source);
  newObj.prop.value = 2;
  log(
    `断言：修改分配来的属性（对象）后源属性也会跟着变。\n即newObj.props.value = 2;source.prop.value == 2`,
    source.prop.value == 2
  );
});
demo(`实验：无效参数遭跳过`)(() => {
  log(
    `断言：遇到无效参数时跳过，直至分配完source参数列表`,
    Object.assign(
      {},
      { first: 1 },
      { second: 2 },
      "0",
      !0,
      null,
      void 0,
      Symbol(0),
      3,
      [],
      function () {},
      { fourth: 4 }
    )
  );
});
