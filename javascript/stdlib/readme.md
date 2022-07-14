# {Object}

```js
// 产生一个包装类对象
Object(Any);
new Object(Any);
```

## Prototype properties/methods

- Object.prototype.constructor 构造函数属性

- Object.prototype.hasOwnProperty(prop) 实例的自身属性名中，是否有 prop。支持 Symbol 和 String 类型属性
- Object.prototype.isPrototypeOf(obj) 实例是否在实参 obj 的原型链上
- Object.prototype.propertyIsEnumerable(prop) 该实例的 prop 属性是否可枚举(即 descriptor.enumerable 的值)

- Object.prototype.toLocaleString() [弃用]
- Object.prototype.toString() 用字符串表示对象类型，形式为[object xxx]
- Object.prototype.valueOf() 查询实例的原始值

## Static properties/methods

<!-- required -->

- Object.create(proto[,properties]) 创建对象，以参数 proto 对象做为原型对象，以 properties 对象配置实例属性
- Object.assign(target,...source) 分配属性给对象，将 source 参数列表的各个对象（从左到右）的属性（可枚举）分配给 target 参数对象
- Object.defineProperty(obj, prop, descriptor) 定义实例对象的属性，通过属性描述符
- Object.defineProperties(obj, descriptors) 定义实例对象的属性，通过属性描述符集
- Object.getOwnPropertyDescriptor(obj,prop) 获得 obj 对象的 prop 属性的属性描述符，支持 String 和 Symbol 类型
- Object.getOwnPropertyDescriptors(obj) 获得 obj 对象的属性描述符集
- Object.getOwnPropertyNames(obj) 获取 obj 对象自身 String 属性的名称数组（不支持 Symbol 属性）
- Object.getOwnPropertySymbols(obj) 获取 obj 对象自身 Symbol 属性的名称数组（不支持 String 属性）
- Object.hasOwn(obj,prop) 与 Object.prototype.hasOwnProperty 特性一致，用来取代后者
- Object.setPrototypeOf(obj,newProto) 设置实参 obj 的原型
- Object.getPrototypeOf(obj) 获取实参 obj 的原型（本尊）

- Object.freeze(obj) obj 冻结对象，冻结状态即无法增、删、改自身属性（含 prototype 属性），且所有属性的 属性描述符 writable、configurable 均置为 false。对象状态无法复原。
- Object.isFrozen(obj) 对象是否为冻结态（被施加过 freeze 方法）
- Object.seal(obj) 固化对象，被固化对象即无法增、删自身属性（含 prototype 属性），且所有属性的属性描述符 configurable 置为 false。对象状态无法复原。
- Object.isSealed() 对象是否处于固化态（被施加过 seal 方法）
- Object.preventExtensions(obj) 阻止扩展对象属性,即无法增加自身属性（prototype 属性不受影响）
- Object.isExtensible(obj) 对象是否为可扩展态（被施加过 preventExtensions 方法）

<!-- enhance -->

- Object.entries()
- Object.fromEntries()
- Object.keys(obj)
- Object.values(obj)
- Object.is(value1,value2) 是否严格相等(严格一词是相较于==和===)
