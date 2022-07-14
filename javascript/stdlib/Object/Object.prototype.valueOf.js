import { demo, log, dir, line } from "../util.js";

/* Object.prototype.valueOf() 无参数
@return {Any} 字符串
语义：查询实例的原始值（若没有原始值则返回对象本身？）
说明：通常无需主动去调用，直接使用访问器即可。
cases:
*/

demo(`实验：显式取值`)(() => {
  let o = { name: "o" };
  log(o.valueOf());
  log(o === o.valueOf());
});

demo(`实验：Object.prototype.valueOf() === Object.prototype`)(() => {
  log(Object.prototype.valueOf() === Object.prototype); // true
});
