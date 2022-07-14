# concept

## primitive data type

[primitive data type](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
语言底层的类型，并不能被直接访问到。
原始类型都有对应的 primitive data type：

- Null primitive
- Undefined primitive
- Boolean primitive
- Number primitive
- BigInt primitive
- String primitive
- Symbol primitive

但除了 Null 和 Undefined 没有包装对象外，其余类型都自动包装对象。
当我们访问原始类型时，其实是通过其包装对象的 valueOf()方法返回的 primitive 值。

## 类型判断

typeof
instanceof
Object.prototype.toString()
