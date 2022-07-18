import { demo, log, warn, dir, line } from "../util.js";

/* Function.prototype.bind(thisArg,...param)
@param {Objec t} thisArg
@param {Any} param
@return {Function}
语义：绑定上下文后返回新函数
说明：
- bind传递的剩余实参（即thisArg之外）之后
  - 将会插入到arguments类数组对象的最前面
  - 函数形参与实参之间不再一一对应，呈现错位现象
*/

demo(`验证：this 和 arguments`)(() => {
  let context = { a: 1 };
  let fn = function (x, y, z) {
    log(arguments); // {0:1,1:2,2:3}
    log(this); // {a:1}
    log(this === context); // true
  };
  let boundFn = fn.bind(context);
  boundFn(1, 2, 3);
});

demo(
  `验证：绑定时传入剩余参数（即thisArg以外）之后`,
  `arguments类数组对象前面多出来这些剩余参数`,
  `函数形参与调用函数的实参之间，不再一一对应`
)(() => {
  let context = { a: 1 };
  let fn = function (x, y, z) {
    log(arguments); // {0:0,1:1,2:2,3:3},第一个序号对应的实参是bind传入的，length比实参多了一个
    log(x, y, z); // 0,1,2；形参x,y,z对应arguments的前三项，第四项无法通过形参获取。错位
  };
  let boundFn = fn.bind(context, 0);
  boundFn(1, 2, 3);
});
