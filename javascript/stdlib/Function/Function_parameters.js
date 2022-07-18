import { demo, log, warn, dir, line } from "../util.js";

/* Function
语义：
说明：实参、形参、arguments
参考：
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
*/

demo(`验证：形参个数<=实参个数时，一一对应`)(() => {
  function test(a, b, c = 1, ...d) {
    log(a === arguments[0]);
    log(b === arguments[1]);
    log(c === arguments[2]);
    log(d[0] === arguments[3]);
    log(d[1] === arguments[4]);
  }
  test(1, { name: "b" }, 3, 4, 5);
});
demo(`验证：形参个数>实参个数时，多出来的形参值为undefined`)(() => {
  function test(a, b, c = 1, ...d) {
    log(a === arguments[0]);
    log(b === arguments[1]);
    log(c === arguments[2]);
    log(d[0] === arguments[3]);
    log(d[1] === arguments[4]);
  }
  test(1, { name: "b" }, 3, 4, 5);
});

demo(`验证：传递undefined、null和不传实参，arguments.length不相同`)(() => {
  function test(a, b) {
    console.log(arguments.length);
  }
  test(null, void 0);
  test();
});

demo(`验证：函数根作用域内定义一个名字同形参名的变量，会报语法错误`)(() => {
  function test(a) {
    // let a = "a";// SyntaxError
  }
  test("1");
});

demo(`验证：修改形参的值(基本类型)时，实参的值不变`)(() => {
  function test(a) {
    a = "b";
  }
  let a = "a";
  test(a);
  log(a); // 'a'
});

demo(`验证：给形参赋值为对象类型时，实参的值不变`)(() => {
  function test(a) {
    a = ["b"];
  }
  let a = ["a"];
  test(a);
  log(a); // ['a']
});

demo(`验证：修改形参的值（对象类型）时，实参的值发生变化,即mutable`)(() => {
  function test(a) {
    a.push("b");
  }
  let a = ["a"];
  test(a);
  log(a); // ['a','b']
});
