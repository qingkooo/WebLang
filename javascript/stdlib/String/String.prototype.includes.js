import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "includes";
/** String.prototype.includes(subStr,startIndex)
 * @return {Boolean}
 * @param {String} subStr,大小写敏感
 * @param {Number} startIndex，默认0，越界时小）值取0，大值并不会限制取值（从而导致包含不到
 */

demo(`验证：区分大小写`)(() => {
  const str1 = "abc";
  const str2 = "aB";
  log(str1.includes(str2)); // false
  log(str1.includes(str2.toLowerCase())); // true
});

demo(`验证：从指定位置`)(() => {
  const str1 = "abcabc";
  const str2 = "abc";
  log(str1.includes(str2, 3)); // true
  log(str1.includes(str2, -1)); // true
  log(str1.includes(str2, 9)); // false
});
