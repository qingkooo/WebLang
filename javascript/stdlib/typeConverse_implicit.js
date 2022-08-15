import { demo, log, warn, err, dir, line, typeis } from "./util.js";
document.title = "隐式类型转换";

/** 隐式类型转换 implicit type conversion
 * 当2个类型不同的数据结构遇到操作符运算时，通过自动调用toString、valueOf这两个接口完成类型转换的行为
 * 运算式： (<type><operator><type>)[<operator><type>]*
 * 运算符优先级：见犀牛书page66，表4-1
 * 运算规则：在基本运算单元即 <type><operator><type>中
 *    - 算术操作符 /[-*\%]/时, 使用数值运算算法。
 *    - 关系操作符 /[><]|(>=)|(<=)|(!=)|(==)/
 *    - 算术操作符 /[+]/时, 使用数值运算算法，取值并执行相关算法。
 *    - 逻辑操作符时, 使用布尔运算算法。
 * 具体算法：
 *    - 数值运算：若2个type类型不同则NaN。取值进行算术计算。
 *    - 字符串运算：取值进行字符串连接计算。
 *    - 布尔运算：
 * 取值规则：
 *    - 若为数值运算算法，调用valueOf接口取值。若取不到值（没有对应的接口）时选择字符串运算算法
 *    - 若为字符串运算算法，调用toString接口取值
 *    - 若为布尔运算算法，不会调用valueOf或toString接口
 *    - 找接口的顺序:[实例方法,原型方法]，这是原型链的知识
 *    - 取到的值不进行类型推断，因此运算可能会导致错误。这是弱类型语言的知识
 * - symbol数据结构虽然部署有这2个接口，但强制不自动进行隐式转化
 * - 内置数据结构的隐式类型值转换表：？
 * 参考：https://juejin.cn/post/6873215243804213262
 */
demo(
  `实验：基本认知`,
  `隐式转换时，其toStringa或valueOf接口会被自动调用`,
  `只要原型链上存在该接口，则可以成功取值`
)(() => {
  class A {
    constructor(count) {
      this.count = count;
      this.valueOf = function () {
        return "instance_valueOf";
      };
      this.toString = function () {
        return "instance_toString ";
      };
    }
    valueOf() {
      return "prototype_valueOf";
    }
    toString() {
      return "prototype_toString";
    }
  }
  let a = new A(10);
  log(a); // {}
  log(a.toString()); // instance_toString
  log(String(a)); // instance_toString
  log(`${a}`); // instance_toString
  log(String.raw`${a}`); // instance_toString
  log(a + "0"); // instance_valueOf,优先考察两个type中是否有valueOf接口，有则进行数值运算
  log("0" + a); // instance_valueOf
  log(a.valueOf()); // instance_valueOf
  log("注意：", +a); // NaN,无法对Object对象进行+<type>操作
  log(a.valueOf, a + 1); // instance_valueOf
  log("注意：", a - "0"); // 因为【-】为数值运算，而"instance_valueOf" 和 0类型不同，因此值为NaN。因此没有调用接口
  log("注意：", "0" - a); // 同上。
  log(a == true); // 【==】操作符不会调用接口
  log(a == ""); // 同上
  log(a == 1); // 同上
});

demo(
  `实验：取值规则验证，会在原型链上一直找下去吗`,
  `会！`
)(() => {
  class A0 {
    valueOf() {
      return "A0_prototype_valueOf";
    }
    toString() {
      return "A0_prototype_toString";
    }
  }
  class A extends A0 {
    constructor(count) {
      super();
      this.count = count;
      this.valueOf = function () {
        return "instance_valueOf";
      };
      this.toString = function () {
        return "instance_toString ";
      };
    }
    valueOf() {
      return "prototype_valueOf";
    }
    toString() {
      return "prototype_toString";
    }
  }
  let a = new A(10);
  log(a); // {}
  log(a.toString()); // instance_toString
  log(String(a)); // instance_toString
  log(`${a}`); // instance_toString
  log(String.raw`${a}`); // instance_toString
  log(a + "0"); // instance_valueOf,优先考察两个type中是否有valueOf接口，有则进行数值运算
  log("0" + a); // instance_valueOf
  log(a.valueOf()); // instance_valueOf
  log("注意：", +a); // NaN,无法对Object对象进行+<type>操作
  log(a.valueOf, a + 1); // instance_valueOf
  log("注意：", a - "0"); // 因为【-】为数值运算，而"instance_valueOf" 和 0类型不同，因此值为NaN。因此没有调用接口
  log("注意：", "0" - a); // 同上。
});

demo(
  `实验：通过使用底层接口[Symbol.toPrimitive]来劫持隐式自动转化的行为，可以提供另一个观察角度`,
  `hint(提示):
  - string 类型为字符串
  - number 类型为数值
  - default 类型未知时`,
  `注意：不兼容ie`
)(() => {
  class A {
    constructor(count) {
      this.count = count;
    }
    valueOf() {
      return this.count * 10;
    }
    toString() {
      return "abc";
    }
    [Symbol.toPrimitive](hint) {
      if (hint === "number") {
        console.log("hint === number");
        return this.valueOf();
      }
      if (hint === "string") {
        console.log("hint === string");
        return this.toString();
      }
      console.log("hint === default");
      return this.toString();
    }
  }
  // todo
});
