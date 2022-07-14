import { demo, log, dir, line } from "../util.js";

/* Object.defineProperties(obj, descriptors)
@param {Object} obj,待修改的对象
@param {Object} descriptors,属性描述符集
@return {Object} obj(本尊)
语义：定义对象实例的属性,多个
特性：详细见defineProperty
*/

demo(`实验：通过属性描述符，批量设置实例属性`)(() => {
  let o = { name: "origin" };
  Object.defineProperties(o, {
    aa: {
      value: "aa",
    },
    bb: {
      value: "bb",
    },
  });
  log(`o:`, o);
  log(`o的属性描述符集：`, Object.getOwnPropertyDescriptors(o));
});
