import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "concat";
/** String.prototype.concat(str2, [, ...strN])
 * @return {String}
 * @param {String} ...strN，非String类型会自动转化为String
 * 语义：字符串连接
 * 特性：
 * - 支持任何平面字符，因为是字符串边界的连接而不涉及字符的拆分
 */
demo(`实验：`)(() => {
  const str = "123";
  log(str.concat("abc", "xyz"));
  log(str.concat("𝌆abc")); // 辅助平面字符
  log(str.concat(456, 789)); // 非string类型会自动转化
});
