import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.charCodeAt(index)
Instance {String} unicode表码点范围在0-65535（十六进制为0x0000-0xFFFF）之间的字符（即BMP平面字符）
@param {Number} index,位置

String.prototype.CodePointAt(index) 
Instance {String} char,unicode表内任意字符(包含BMP和辅助平面的字符)
@param {Number} index,位置

@return {String|Undefined} UTF-16表示的unicode码点

语义：从字符查询unicode表的码点
特性：
- 使用CodePointAt替代charCodeAt，应对任意平面字符
*/
