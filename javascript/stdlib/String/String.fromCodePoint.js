import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.fromCharCode(codePoint1,[,...codePointx])
@param {Number} codePointx  UTF-16表示的码点，范围在0-65535（十六进制为0x0000-0xFFFF），即BMP平面
String.fromCodePoint(codePoint1,[,...codePointx]) 
@param {Number} codePointx  UTF-16表示的码点,无范围限制(包含BMP和辅助平面)
@return {String} unicode字符
语义：从码点查询字符
特性：
- 使用fromCodePoint替代fromCharCode，应对任意平面字符
*/

demo(`验证：fromCharCode只能读取BMP平面,读取辅助平面时会截断而乱码`)(() => {
  const str = "AB𝌆";
  // 得到unicode表中的码点
  const charCode_a = String.prototype.charCodeAt.call(str, 0); // 取第一个字符的码点
  const charCode_b = String.prototype.charCodeAt.call(str, 1); // 取第二个字符的码点
  const charCode_n1 = String.prototype.charCodeAt.call(str, 2); // 取第n个字符的码点
  // 新接口
  const charCode_n2 = String.prototype.codePointAt.call(str, 2); // 取第n个字符的码点
  const arr = [
    String.fromCharCode(charCode_a),
    String.fromCharCode(charCode_b),
    String.fromCharCode(charCode_n1),
    // 新接口
    String.fromCodePoint(charCode_n1),
    String.fromCodePoint(charCode_n2),
  ];
  log(arr);
  log(String.fromCharCode(charCode_a, charCode_b, charCode_n1));
});
