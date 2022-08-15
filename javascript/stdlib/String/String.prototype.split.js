import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "split([separator[, limit]])";

/** String.prototype.split([separator[, limit]])
 * @return {}
 * @param {}
 * 语义：
 * 特性：
 * - 不支持辅助平面字符;
 */

demo(`实验：第一参数`)(() => {
  const str1 = "1,2,3,4,5,𝌆,6";
  const str2 = "12345𝌆6";
  log(str1.split(","));
  log(str2.split("")); // 非BMP字符处理不当
});
demo(
  `实验：第二参数`,
  `除非数量庞大，否则我不会用到这个参数吧`
)(() => {
  const str = "1,2,3,4,5,6,7,8,9";
  log(str.split(",", 5));
});
