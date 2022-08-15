import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/*  String.prototype.matchAll(ref)
@param {RegExp|String} ref，匹配规则，大小写敏感
@return {Iterator} 
语义：
- 匹配数组（正则）
- 匹配对象（字符串）
- 空：允许为空等同于空串或者空正则，表示匹配任意字符
特性：
- 仅支持BMP平面字符
*/

demo(`验证：基本用法
正则对象参数返回数组
字符串参数返回arrayLink,item[0]为匹配的第一项`)(() => {
  const str = "abc123𝌆0abc123";
  const reg1 = /abc/gi;
  const reg2 = "abc";
  const reg3 = "𝌆";

  log([...str.matchAll(reg1)]);
  log([...str.matchAll(/hello/g)]); // [empty]
  log([...str.matchAll()]); // 
  log([...str.matchAll(reg2)]);
  log([...str.matchAll("hello")]);
  log([...str.matchAll(reg3)]);
  log([...str.matchAll("0")]);
});
