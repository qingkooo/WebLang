import { demo, log, warn, err, dir, line, typeis } from "../util.js";
document.title = "substring";
/** String.prototype.substring(index1,index2) 
@param {Number} index1
@param {Number} index2
@return {String} 
* 特性：
- index1和index2大小随意，值大的为右侧，值小的是左侧,越界按边界值。
- 取值范围包含值小的，不包含值大的。不支持负数。
- 仅支持BMP平面字符
*/
demo(`实验：辅助平面字符`)(() => {
  const str = "01234𝌆56789".normalize();
  log(str.substring(1, 5));
  log(str.substring(5, 7)); // 无法将辅助平面字符看作一个字符
  log(str.substring(5, 6));
});
demo(`实验：index1和index2没有先后顺序，按小值左边界大值右边界来算`)(() => {
  const str = "01234𝌆56789".normalize();
  log(str.substring(5, 1)); // [1,5)
  log(str.substring(5, -1)); // [0,5),首先是[-1,5),其次取边界值[0,5) // 负数越界了
});
demo(`验证：默认值`)(() => {
  const str = "012345678𝌆9abcdefg";
  log(str.substring()); // 省略所有参数时返回原字符串
  log(str.substring(1)); // 可以省略第二个参数，默认是str.length
});
