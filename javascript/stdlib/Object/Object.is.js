import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/* Object.is(value1,value2)
@param {Any} value1,value2
@return {Boolean}
语义：是否严格相等(严格一词是相较于==和===)
特性：
- 比==更严谨，不自动进行类型转换
- 比===更加严格
  - 对象类型比较时，指针地址要一致才相等
  - 数字类型比较时，区分+0、-0、NaN
*/

demo(``)(() => {
  // Case 1: Evaluation result is the same as using ===
  log(Object.is(25, 25)); // true
  log(Object.is("foo", "foo")); // true
  log(Object.is("foo", "bar")); // false
  log(Object.is(null, null)); // true
  log(Object.is(undefined, undefined)); // true
  log(Object.is(window, window)); // true
  log(Object.is([], [])); // false
  var foo = { a: 1 };
  var bar = { a: 1 };
  log(Object.is(foo, foo)); // true
  log(Object.is(foo, bar)); // false

  // Case 2: Signed zero
  log(Object.is(0, -0)); // false
  log(Object.is(+0, -0)); // false
  log(Object.is(-0, -0)); // true
  log(Object.is(0n, -0n)); // true

  // Case 3: NaN
  log(Object.is(NaN, 0 / 0)); // true
  log(Object.is(NaN, Number.NaN)); // true
});
