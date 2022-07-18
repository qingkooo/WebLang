import { demo, log, warn, dir, line } from "../util.js";
/* Function.prototype.call(thisArg,...param)
@param {Object} thisArg
@param {Any} param
@return {MethodsReturn}
语义：绑定上下文后执行新函数
说明：
*/

demo(`验证：绑定上下文对象并执行`)(() => {
  let fn = function () {
    log(this.name); // other
  };

  let context = { name: "other" };
  fn.call(context); // log:other
});

demo(`验证：参数太多和太少`)(() => {
  let fn = function (a, b) {
    log(a, b);
  };
  {
    let obj = { name: "other" };
    fn.call(obj, 1, 2, 3, 4, 5); // log:1,2;因为形参只有2个，只能接收前面2个
    fn.call(obj, 1); // log:1,undefined;实参只有1个而形参有2个，所以b变量为undefined
  }
});
