import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/* String.raw(templateObject,...interpolation) 函数式
String.raw`templateString` 非函数式
@param {Object} templateObject
{raw:{String|Array}
@param {String} interpolation,多余的会自动忽略,非String会自动转化为String
@return {String}
语义：模版字符串处理返回原始（不转义）字符串。相对于字面量字符串会转义字符。字面量加反斜杠(\)进行反转义更加方便些，但方法调用的场景更广。
特性：
- 不转义字符
- 2种api中可以使用插值占位符，${variable|expression}
- 函数式api中
  - 多余的interpolation参数会自动忽略
  - 非String类型的interpolation参数会自动转化为String
  - templateObject.raw值类型，String｜Array(推荐)
*/

demo(`实验：非函数式api的使用`)(() => {
  const space = String.raw`(     )`;
  const other = String.raw`\r\n`;
  log(`${space}${other}`); // 插值表达式照样可以写，且不会转义字符
});

demo(
  `实验：函数式api用途，作为模版来插值`,
  `仅在BMP平面进行测试`
)(() => {
  const o1 = String.raw({ raw: "a\rb\nc" }, 1, 2, 3, 4, 5); // 字符串时，逐个字符插入插值。多余的参数会自动忽略
  const o2 = String.raw({ raw: ["a", "\r", "b", "\n", "c"] }, 1, 2, 3, 4, 5); // 数组时，才是模版应该有的样子。
  const o3 = String.raw({ raw: ["a", "b", "c"] }, 1, { name: "obj" }); // 非String类型参数会自动转化为String
  log(o1, o2, o3);
});

demo(`实验：测试非基本平面字符`)(() => {
  log("a𝌆bc");
  const o1 = String.raw({ raw: "a𝌆bc" }, 1, 2, 3, 4); // 无法正常插值
  const o2 = String.raw({ raw: ["a", "𝌆", "b", "c"] }, 1, 2, 3, 4); // 可以正常插值
  log(o1, o2);
});

demo(`实验：不转义字符`)(() => {
  const str1 = "multiple   spaces";
  const str2 = "control\r\nscharacters";
  const str3 = String.raw`${str2}`;
  const str4 = String.raw`control\r\nscharacters`;
  log(str1); // 字面量不会自动合并空格的
  log(str2); // 但字面量会自动转义
  log(str3); // 转义完毕后的字符串，无法通过raw该方法复原
  log(str4); // 正确做法是通过该方法+原始字符串
});

demo(
  `场景：RegExp(pattern,flags)接口的pattern参数，无需转义`,
  `通常我们使用反转义符\\`,
  `现在我们有了更有力工具`
)(() => {
  // /\w/有如下含义：
  // /[0-9a-zA-Z_]/
  const reg1 = new RegExp("\\w", "g");
  const reg2 = new RegExp(String.raw`\w`, "g"); // 无需写反义符
  const str = "012abcABC_";

  const ret1 = str.split("").every((char) => {
    const ret = reg1.test(char);
    reg1.lastIndex = 0;
    return ret;
  });

  const ret2 = str.split("").every((char) => {
    const ret = reg2.test(char);
    reg2.lastIndex = 0;
    return ret;
  });

  log(ret1, ret2);
});

demo(`场景：eval(code)时，若code中包含控制符比如\n则程序会报错`)(() => {
  const code1 = `console.log('first \n second!')`;
  const code2 = String.raw`console.log('first \n second!')`;
  try {
    eval(code1);
  } catch (e) {
    log(`执行eval(code1)报错:${e.message}`);
    eval(code2);
  }
});
