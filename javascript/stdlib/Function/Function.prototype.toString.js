import { demo, log, warn, dir, line } from "../util.js";

/* Function.prototype.toString()
@return {String} 函数源代码的字符串
语义：函数的字符串源码
说明：
是对Object.prototype.toString的覆写
*/

demo(`验证：声明式函数和函数表式都能转,和ES5或6语法无关`)(() => {
  function a(a, b, c) {
    // todo
    console.log(a, b, c);
    return a + b + c;
  }
  const b = function (a, b = 1, ...c) {
    // todo
    console.log(a, b, c);
    return a + b + c[0];
  };

  log(a.toString());
  log(b.toString());
});

demo(`实验:对源代码字符串进行解析`)(() => {
  function parseFunction(str_fn) {
    if (typeof str_fn !== "string") return null;

    const seprate = str_fn.trim().indexOf("{");
    let str = [];
    str.push(str_fn.substring(0, seprate).trim());
    str.push(str_fn.substring(seprate, str_fn.length).trim());
    const reg_fn_name = /(?<=[\s])[^\(\s]+(?=[(])/;
    const reg_fn_args = /(?<=[(]).*(?=[)])/;
    return {
      name: str[0].match(reg_fn_name)[0].trim(),
      args: str[0].match(reg_fn_args)[0].split(/\s*[,]\s*/),
      code: str[1]
        .substring(1, str[1].length - 1)
        .trim()
        .split(/(\n|\r\n)/),
    };
  }
  log(
    parseFunction(
      function abc(a, b = 1, ...c) {
        console.log(a, b, c);
        return a + b + c[0];
      }.toString()
    )
  );
});
