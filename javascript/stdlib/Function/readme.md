# {Function}

## Inheritance

[Object](../Object/readme.md)

## Function

parameter 函数的形参
props 调用者传入的实参
arguments 函数作用域里实参对象，数量大于或等于 props,但和 props 没关系
new.target 用以判断是否正确使用了 new+构造函数来正确使用了本构造函数

## prototype properties

- Function.prototype.displayName [Non-standard]
- Function.prototype.length 形参个数,read-only
- Function.prototype.name 函数(表达式)的名称,read-only
- Function.prototype.prototype
  - 其属性描述符为：{writable:true,enumerable:false,configurable:false}

## prototype methods

- Function.prototype.bind(this) 绑定上下文后返回新函数
- Function.prototype.call(this,...prop) 绑定上下文后执行新函数
- Function.prototype.apply(this,array) 绑定上下文后执行新函数
- Function.prototype.toString() 函数的字符串源码
