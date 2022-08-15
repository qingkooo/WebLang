import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "padStart,padEnd";

/** String.prototype.padStart(targetLength [,padString])
/** String.prototype.padEnd(targetLength [,padString])
 * @return {String}
 * @param {String} targetLength，return值的长度
 * @param {String} padString，填充物
 * 语义：在两端填充字符
 * 特性：
 * - targetLength小于自身长度时，无效
 */
demo(`实验：基本用法`)(() => {
  const str = "123";
  log(str.padStart(5, "0"));
  log(str.padEnd(5, "0"));
  log(str.padStart(2, "0")); // 小于等于不会填充
  log(str.padStart(-10, "0")); // 负数也不会填充
});
demo(`场景：显示手机号的遮蔽效果`)(() => {
  const phoneNumber = "18056781234";
  function maskStr(originStr, lastDigit = 4, mask = "*") {
    const str = originStr.slice(lastDigit * -1);
    return str.padStart(originStr.length, mask);
  }
  log(`保密的电话号码为：`, maskStr(phoneNumber, 5));
});
