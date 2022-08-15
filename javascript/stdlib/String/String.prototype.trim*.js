import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "trim";

/** String.prototype.trim()
/** String.prototype.trimStart()
/** String.prototype.trimEnd()
 * @return {}
 * @param {}
 * 语义：裁剪两端（某端）空白字符和行终止符。
 * 特性：
 * https://www.unicode.org/charts/PDF/U0000.pdf
 */
demo(``)(() => {
  const str = "   \r\nabc123    \r\n\t";
  log(str.trim());
  log(str.trimStart());
  log(str.trimEnd());
});
