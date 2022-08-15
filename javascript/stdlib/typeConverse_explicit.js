import { demo, log, warn, err, dir, line, typeis } from "./util.js";
if (document) document.title = "显式类型转换";

/** 类型转化相关的接口
* <Type>.prototype.toString 字符串表示
* @return {String} 
Object.prototype.toString() // [object <Type>],字符串表示的类型
Array.prototype.toString() // item[,item...],字符串表示的类型
Number.prototype.toString([redix]) // 字符串表示的以基数为进制的数值,redix基数，范围[2,26] 默认10
BigInt.prototype.toString([redix]) // 同上,redix基数，范围[2,26] 默认10
Function.prototype.toString() // 字符串表示的函数原代码（貌似只有\n不会被转义)
Boolean.prototype.toString() // 字符串表示的值，'true'|'false'
Symbol.prototype.toString() // 字符串表示的值，形式为Symbol(<value>)
String.prototype.toString() // 字符串表示的值
Date.prototype.toString() // 字符串表示的UTC

* <Type>.prototype.valueOf 原始值
* @return {Instance|Any} 
Object.prototype.valueOf() // 本身{Object}
Array.prototype.valueOf() // 本身{Array}
Number.prototype.valueOf() // 数值{}
BigInt.prototype.valueOf() // 数值
Function.prototype.valueOf() // 本身
Boolean.prototype.valueOf() // 比尔值
Symbol.prototype.valueOf() // 它所包含的原始值
String.prototype.valueOf() // 字符串值
Date.prototype.valueOf() // 字符串值，1970-1-1 00:00起至今的毫秒数 UTC
*/

/** 显式类型转化的使用场景：
 * 参考：https://mp.weixin.qq.com/s/Mg2aDU0FNY0a16leSjQX4Q
 */
demo(
  `场景：转Boolean类型`,
  `1，!运算符`,
  `2，Boolean(type)`
)(() => {
  // 以下类型可以被!!运算符转为false，其他类型为true
  const items = [null, void 0, "", 0, NaN];
  items.forEach((item) => log(typeof !!item, !!item));
  // Boolean
  items.forEach((item) => log(typeof Boolean(item), Boolean(item)));
});
demo(
  `场景：转String`,
  `1，使用toString接口`,
  `2,String(type)`
  // <type>+"" 这种熟悉的方式是隐式转换
)(() => {
  // toString接口，以Number.prototype.toString为例
  const num = 2;
  log(typeof num.toString(), num.toString());
  // String(type)
  log(typeof String(num), String(num));
});
demo(
  `场景：转Number`,
  `1,parseInt(string,redix),指定字符串表示的任意进制以及基数，得到十进制数值`,
  `2,+<type>，得到十进制数值。但有时候+的使用场景会很有限，因此使用第3种`,
  `3,~~<type>,两个按位运算符`,
  `4,Number(type)`
)(() => {
  log(parseInt("010", 2));
  log(+"0xF");
  log(+"123");
  log(~~"0xF");
  log(~~"123");
  log(Number("1234"));
});
