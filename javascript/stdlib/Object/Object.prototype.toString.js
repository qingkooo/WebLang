import { demo, log, dir, line } from "../util.js";

/* Object.prototype.toString() 无参数
@return {String} 字符串
语义：查询出字符串表示的对象类型，即[object xxx]。to并非转换之意
说明：
cases:
*/

function typeis(obj) {
  const str = Object.prototype.toString.call(obj);
  return str.substring(str.indexOf(" ") + 1, str.length - 1);
}

demo(`场景：typeis`)(() => {
  let object = {};
  let array = [];
  function fn() {}
  let string = "";
  let boolean = !0;
  let symbol = Symbol("0");
  let number = 1;
  let bigInt = 1n;
  let _null = null;
  let _undefined = void 0;
  let set = new Set();
  let map = new Map();
  let math = Math; // property
  let error = new Error();

  log(`string:`, typeis(string));
  log(`boolean:`, typeis(boolean));
  log(`symbol:`, typeis(symbol));
  log(`number:`, typeis(number));
  log(`bitInt:`, typeis(bigInt));
  log(`null:`, typeis(_null));
  log(`undefined:`, typeis(_undefined));

  log(`object:`, typeis(object));
  log(`array:`, typeis(array));
  log(`function:`, typeis(fn));
  log(`set:`, typeis(set));
  log(`map:`, typeis(map));
  log(`math:`, typeis(math));
  log(`error:`, typeis(error));
});
