import { demo, log, warn, dir, line } from "../util.js";

/* Function
语义：
说明：
参考：
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
*/

demo(
  `验证：，new关键字得到的实例，类对象的prototype属性将以原型链方式继承给它`
)(() => {
  function Menlon(name, color) {
    this.name = name;
    this.color = color;
  }
  Menlon.prototype.shape = "round";
  log(``, new Menlon("waterMenlon", "green"));
});

demo(
  `验证：使用new+构造函数时,new.target === 构造函数`,
  `可以用来做类库的编码使用规范`
)(() => {
  function Foo() {
    if (!new.target) {
      warn("没有使用new，而是简单的调用了构造函数");
      return;
    }
    log("使用了new+构造函数的方式");
    log(new.target === Foo);
  }
  // usage
  new Foo();
  Foo();
});
