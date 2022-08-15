import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "localeCompare";
/** String.prototype.localeCompare(compareString[, locales[, options]])
 * @return {Number} 本身字符串码点比参考字符串小则返回负数，大则返回正数，相同为0
 * @param {String} compareString 用来比较的参考字符串
 * @param {String} locales
 * @param {Object} options
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
 * 语义：当前语言下的码点大小比较
 */
demo(``)(() => {
  log("a".codePointAt(0), "b".codePointAt(0), "a".localeCompare("b"));
  log("b".localeCompare("a"));
  log("1".codePointAt(0), "a".codePointAt(0), "1".localeCompare("a"));
});
demo(``)(() => {
  log("abcdefg", "abc".localeCompare("bc")); // 确定和长度无关，与第一个字符相关
  log("bcd".localeCompare("abc"));
});
