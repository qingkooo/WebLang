import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.indexOf(subStr[,fromIndex])
@param {String} subStr
@param {Number} fromIndex 初始偏移量
@return {Number} 序号，-1表示没找到
语义：子串第一次匹配到时的偏移量(索引值)
特性：
- 从左到右查找，无状态
- 大小写敏感
- 实例对象的值和subStr的值，只能是BMP平面的字符，辅助平面字符不支持
- indexOf接口若忽略fromIndex，语义上是firstIndexOf，对应着lastIndexOf
- subStr缺省时默认当作'undefined'，所以'undefined'.indexOf() 为 0
- subStr为空串时（""），返回值和fromIndex的关系是：
  - 当fromIndex范围为[0,str.length-1]时，返回值是fromIndex
  - 当fromIndex范围不在以上范围时，在左侧时返回值是0，在右侧时返回值是length-1
*/
demo(
  `实验：用法`,
  `indexOf搜索无状态`
)(() => {
  const str = "abcABC123";
  const subStr = ["ab", "AB", 12];
  subStr.forEach((item) => {
    log(String.prototype.indexOf.call(str, item));
    log(str.indexOf(item));
  });
});
demo(`实验：subStr为空时`)(() => {
  const str = ["abcABC123", "undefined"];
  log(str[0].indexOf()); // -1
  log(str[1].indexOf()); // 0
});
demo(`实验：subStr为空字符串时`)(() => {
  const str = ["012", "undefined"];
  str.forEach((item) => {
    log(item.indexOf("")); // 全为0
  });
});
demo(`实验：当fromIndex越界时`)(() => {
  const str = "012";
  log(str.indexOf("", 0)); // 0
  log(str.indexOf("", 1)); // 1
  log(str.indexOf("", 2)); // 2
  log(str.indexOf("", 3)); // 3
  log(str.indexOf("", 4)); // 3
});
demo(`场景：统计一个字符串中某个字母(子串)出现的次数`)(() => {
  var str = "To be, or not to be, that is the question.";
  var targetChar = "e";
  var count = 0;
  var pos = str.indexOf(targetChar);

  while (pos !== -1) {
    count++;
    pos = str.indexOf("e", pos + 1);
  }
  log(count); // 4
});
