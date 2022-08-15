import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "toLowerCase,toUpperCase";
/** String.prototype.toLowerCase() 字符串所有字符转为小写形式
 /** String.prototype.toUpperCase() ...为大写形式
 * String.prototype.toLocaleLowerCase(locale) 选择区域语言大小写映射集来转换为小写形式
 * String.prototype.toLocaleLowerCase([locale,...]) 选择多个区域语言大小写映射集来转换为小写形式
 * String.prototype.toLocaleUpperCase(locale) ...为大写形式
 * String.prototype.toLocaleUpperCase([locale,...]) ...为大写形式
 * @return {String}
 * @param {locale} 区域语言，默认的 locale 是主机环境的当前区域 (locale) 设置。
 * 语义：转换大小写
 * 特性：
 * - 辅助平面字符能正常输出
 * - 默认情况下为浏览器的语言设定
 * - 像土耳其语的大小写映射并不遵循在 Unicode 中的默认的大小写映射，因此会有一个不同的结果。因此必须使用toLocale*这组api
 * 场景：
 * - unicode表中，建立大小写字母之间的对应关系
 */
demo(`实验：使用`)(() => {
  const str = "AbcDef𝌆";
  log(str.toLowerCase());
  log(str.toUpperCase());
});
