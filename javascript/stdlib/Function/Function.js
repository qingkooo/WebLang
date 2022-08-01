import { demo, log, warn, dir, line } from "../util.js";

/* Function
语义：
说明：
- 默认的属性和属性描述符集
{
  length: {writable: false, enumerable: false, configurable: true}
  name: {writable: false, enumerable: false, configurable: true}
  prototype: {writable: true, enumerable: false, configurable: false}
}
参考：
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
*/

demo(`实验：默认情况下函数对象的属性和属性描述符`)(() => {
  function test() {}
  log(``, Object.getOwnPropertyDescriptors(test));
});