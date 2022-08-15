import { demo, log, warn, err, dir, line, typeis } from "../util.js";

/* String.prototype.normalize(UnicodeNormalizationForm)
@param {String} UnicodeNormalizationForm
["NFC","NFD","NFKC","NFKD"],默认是NFC
@return {String} 字符串
语义：字符串正规化，即以多个简单字符(分解后）来表示NFD，还是以单个复杂字符（合成后）来表示NFC
特性：
参考：
https://es6.ruanyifeng.com/#docs/string-methods#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Anormalize
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
*/

demo(`实验：unicode的合成符号演示`)(() => {
  const code1 = "\u004F"; // O
  const code2 = "\u030C"; // （音标符号第三声）
  const code3 = "\u01D1"; // Ǒ
  log(
    `三个码点及其对应的字符`,
    [String.raw`\u004F`, code1],
    [String.raw`\u030C`, code2],
    [String.raw`\u01D1`, code3]
  );
  log(
    `由于unicode支持合成，因此可以组合出来。与组合的顺序无关。当前仅支持2个码点的合成，3个及以上不支持！`,
    [String.raw`\u004F\u030C`],
    `${code1}${code2}`,
    `${code2}${code1}`
  ); // 与组合顺序无关
});
demo(
  `实验：normalize接口的使用`,
  `NFC（默认参数），表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
   NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
   NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）
   NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。`
)(() => {
  const code1 = "\u004F"; // O
  const code2 = "\u030C"; // （音标符号第三声）
  const code3 = "\u01D1"; // Ǒ
  log(`code1,code2:`, code1.codePointAt(), code2.codePointAt());
  log(`code3:`, code3.codePointAt());
  // NFC
  {
    const code = String.prototype.normalize
      .call("\u004F\u030C", "NFC")
      .codePointAt();
    log(`NFC合成后：`, code);
  }
  // NFD
  {
    const code1 = String.prototype.normalize
      .call("\u01D1", "NFD")
      .codePointAt(0);
    const code2 = String.prototype.normalize
      .call("\u01D1", "NFD")
      .codePointAt(1);
    log(`NFD分解后：`, code1, code2);
  }
  // 略
});
