import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "slice";

/** String.prototype.slice(beginIndex[, endIndex])
 * @return {Stirng} 
 * @param {Number} beginIndex,默认0.如为负数会被当做 strLength + beginIndex 看待
 * @param {Number} endIndex,默认0。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex
 * 语义：切片
 * 特性：
 * - 不改变原字符串
 * - 第一参数指向的字符包含，第二参数不包含，即[beginIndex,endIndex)
 * - beginIndex>endIndex,
 */
demo(`实验：如果只写一个参数，即为第一参数beginIndex`)(() => {
  const str = "abc𝌆123";
  log(str.slice());
  log(str.slice(0));
  log(str.slice(1));
  log(str.slice(-1)); // str.length + (-1)
  log(str.slice(4)); // 辅助平面字符无法逐字符滑动
});
demo(`实验：第二参数`)(() => {
  const str = "0123456789";
  log(str.slice(0, 5)); // 第二参数指向字符不包含
  log(str.slice(0, -1)); // 负数表示 str.length+endIndex
  log(str.slice(4, 2).codePointAt(0)); // undefined,空串
});
