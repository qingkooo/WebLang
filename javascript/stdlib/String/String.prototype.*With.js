import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "startsWith,endsWith";

/** String.prototype.startsWith(subStr,startIndex)
 * String.prototype.endsWith(subStr,length)
 * @return {Boolean}
 * @param {String} subStr
 * @param {Number} startIndex,length
 * 语义：选择的当前字符串（第二参数来选择），是否由子串开头或结尾
 * 特性：
 * - 关注点在于当前字符串的选择结果上
 *  - 若startsWith第二参数为负数，等同于0
 *  - 若endsWith第二参数为大于str.length的值，等同于str.length
 */

demo(`实验：subStr参数的用法`)(() => {
  const str = "123abc";
  log(str.startsWith("123"));
  log(str.startsWith("23"));
  log(str.endsWith("abc"));
  log(str.endsWith("bc"));
  log(str.endsWith("ab"));
});
demo(``)(() => {
  const str = "123abc";
  log(str.startsWith("123", 0));
  log(str.startsWith("23", 1));
  log(str.startsWith("123", -100)); // 虽然越界，但当前字符串str仍旧是str
  log(str.startsWith("123", 100)); // str早已是空串
  log(str.endsWith("abc", str.length));
  log(str.endsWith("ab", str.length - 1));
  log(str.endsWith("abc", 100)); // 虽然越界，但当前字符串str仍旧是str
});
