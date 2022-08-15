import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.charAt(index)
@param {Number} index,偏移的字符数。取值范围[0,length-1]
@return {String} character 单个 UTF-16 码元(code unit)，越界时返回空串
语义：按偏移量查询字符
特性：
- 仅支持基本平面字符！
- index越界，返回undifined
*/

demo(`实验：`)(() => {
  const str = "012𝌆456789";
  log(str.charAt(0));
  log(str.charAt(1));
  log(`2.`, str.charAt(2)); // 2
  log(`3.`, str.charAt(3)); // 乱码
  log(`4.`, str.charAt(4)); // 乱码
  log(`5.`, str.charAt(5)); // 4，字符顺序还是对的
  log(str.charAt(6));
  log(str.charAt(7));
  log(str.charAt(8));
  log(str.charAt(9));
  log(`10.`, str.charAt(10)); // 9
  console.log(typeof str.charAt(11), str.charAt(11) === ""); // 越界时返回的是空串
  console.log(typeof str.charAt(-1), str.charAt(-1) === ""); // 同上,不支持负数故越界
  log("---");
  log(str.normalize("NFC").at(3)); // 即使标准化字符串也没用，charAt接口不支持辅助平面
  log(str.normalize("NFC").at(4)); // 同上
  log(str.normalize("NFC").at(5));
});
