import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "repeat";
/** String.prototype.repeat(count)
 * @return {Number} count,重复次数。取值范围[0,+Infinity)，默认值0
 * @param {String}
 * 语义：重复N遍拼装在右侧返回
 * 特性：
 * - count，是一个增量值，而非倍数。比如repeat(1)表示的是增加一倍长度或者说是原来的2倍长度
 * - 因为不涉及逐字符计算，因此辅助平面字符可以胜任
 */
demo(``)(() => {
  const str = "123𝌆";
  log(str.repeat());
  log(str.repeat(1));
  log(str.repeat(2));
});
