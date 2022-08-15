import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.replace(ref, replacement) 
@param {RegExp|String} ref，匹配规则，正则表达式必须设定为全局g标志
@param {Function|String} replacement，替换规则
@return {String} 
语义：替换所有匹配项！，不论ref是什么类型
- 空：删除匹配字符串
特性：
- 支持所有平面字符
参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
demo(
  `实验：辅助平面字符`,
  `支持辅助平面字符`
)(() => {
  const str = "1𝌆2𝌆3451";
  const ref1 = "𝌆";
  const ref2 = /𝌆/g;
  const ref3 = /[𝌆]/g; // regexp不要用单元素符去表示辅助平面字符，否则无法预期
  log(str.replaceAll(ref1, "0"));
  log(str.replaceAll(ref2, "0"));
  log(str.replaceAll("1", "𝌆"));
  log(str.replaceAll(ref3, "+")); // 辅助平面字符处理不达预期
  log(str);
});
