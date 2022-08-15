import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.at(index)
@param {Number} index,偏移的字符数。负数表示从尾部偏移
@return {String|undefined} character 单个 UTF-16 码元(code unit)
语义：按偏移量查询字符
特性：
- index支持负数，表示从尾部向头部偏移
- 仅支持基本平面字符！
- index越界，返回undifined
*/

demo(`实验：`)(() => {
  const str = "012𝌆456789";
  log(str.at(0));
  log(str.at(1));
  log(`2.`, str.at(2)); // 2
  log(`3.`, str.at(3)); // 乱码
  log(`4.`, str.at(4)); // 乱码
  log(`5.`, str.at(5)); // 4，字符顺序还是对的
  log(str.at(6));
  log(str.at(7));
  log(str.at(8));
  log(str.at(9));
  log(`10.`, str.at(10)); // 9
  console.log(typeof str.at(11), str.at(11) === void 0); // 越界时返回的是undefined
  console.log(typeof str.at(11), str.at(-1) === void 0); // 9，支持负数，故未越界
  log("---");
  log(str.normalize("NFC").at(3)); // 即使标准化字符串也没用，at接口不支持辅助平面
  log(str.normalize("NFC").at(4)); // 同上
  log(str.normalize("NFC").at(5));
});
