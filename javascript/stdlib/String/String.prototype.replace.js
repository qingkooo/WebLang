import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.replace(ref, replacement)
@param {RegExp|String} ref，匹配规则
@param {Function|String} replacement，替换规则
replacement为字符串时，可以使用占位符：
- $$ 插入一个 "$"
- $& 插入匹配的子串
- $` 插入当前匹配的子串左边的内容
- $' 插入当前匹配的子串右边的内容
- $n （若第一个参数是 RegExp对象，并且 n 是个小于 100 的非负整数）
  - 插入第 n 个括号匹配的字符串（索引是从 1 开始）
  - 如果不存在第 n 个分组，那么将会把匹配到到内容替换为`${n}`这样的字面量。比如不存在第 3 个分组，就会用“$3”替换匹配到的内容。
- $<Name> 这里Name 是一个分组名称。
  - 只有在支持命名分组捕获的浏览器中才能使用。
  - 如果在正则表达式中并不存在分组（或者没有匹配），这个变量将被处理为空字符串。
replacement为函数时 function replacer(match, ...pn, offset, string) {}
- match 匹配的子串{String}（对应于上述占位符的$&）
- pn 若第一个参数为正则对象，则pn表示第n个匹配项（比如p1，p2...),否则empty
- offset 匹配到的子字符串在原字符串中的偏移量
- string （被匹配的）原字符串
- NamedCaptureGroup ？？？？？？
@return {String} 
语义：仅替换第一个匹配项（ref为字符串时）
- 空：删除匹配字符串
特性：
- 支持所有平面字符
参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
demo(
  `实验：辅助平面字符`,
  `支持辅助平面字符`
)(() => {
  const str = "1𝌆2345";
  const ref1 = "𝌆";
  const ref2 = /𝌆/g;
  const ref3 = /[𝌆]/g; // regexp不要用单元素符去表示辅助平面字符，否则无法预期
  log(str.replace(ref1, "0"));
  log(str.replace(ref2, "0"));
  log(str.replace("1", "𝌆"));
  log(str);
});
