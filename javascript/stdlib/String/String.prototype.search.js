import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.search(regexp)
@param {RegExp} 正则规则
@return {Number} 找不到返回-1
语义：查找(匹配到的第一个)索引位置
特性：
- 仅支持BMP平面字符
*/

demo(
  `验证：传入非regexp对象，会自动转化为regexp`,
  `支持数字、字符串类型`
)(() => {
  const str1 = "1234567890123456789";
  const reg = [9, "9", true];
  reg.forEach((reg) => {
    log(`${reg}`, str1.search(reg));
  });
});
demo(`验证：对于不同平面字符查找`)(() => {
  const str1 = "1234567890123456789";
  const str2 = "1𝌆34567890123456789";
  const reg = /[9]/g;
  log(str1.search(reg)); // 8
  log(str2.search(reg)); // 9，不正确
});
