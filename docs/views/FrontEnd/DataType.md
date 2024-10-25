---
title: 前端基础-数据类型详解
date: 2020-03-07
sidebar: "auto"
categories:
  - 前端
tags:
  - 前端基础
  - 前端
---

# 数据类型

## 基本数据类型

### Number

1. 数学对象(Math) [10]

   - `Math` 对象提供了一系列用于数学计算的静态方法和属性

     - Math.abs(x): 返回数字的绝对值

     ```javascript
     Math.abs(-5); // 5
     ```

     - Math.round(x): 返回四舍五入后的整数。

     ```javascript
     Math.round(4.6); // 5
     ```

     - Math.floor(x): 返回小于或等于 x 的最大整数。

     ```javascript
     Math.floor(4.9); // 4
     ```

     - Math.ceil(x): 返回大于或等于 x 的最小整数。

     ```javascript
     Math.ceil(4.1); // 5
     ```

     - Math.max(x, y, ...): 返回零个或更多个数值中的最大值。

     ```javascript
     Math.max(10, 20, 30); // 30
     ```

     - Math.min(x, y, ...): 返回零个或更多个数值中的最小值。

     ```javascript
     Math.min(10, 20, 30); // 10
     ```

     - Math.random(): 返回 0 到 1 之间的随机数（不包括 1）。

     ```javascript
     Math.random(); // 0.7361638759801613 (示例值)
     ```

     - Math.pow(base, exponent): 返回 base 的 exponent 次幂。

     ```javascript
     Math.pow(2, 3); // 8
     ```

     - Math.sqrt(x): 返回数字的平方根。

     ```javascript
     Math.sqrt(16); // 4
     ```

     - Math.trunc(x): 返回数字的整数部分，移除小数点后的部分。

     ```javascript
     Math.trunc(4.9); // 4
     ```

2. 数字对象(Number) [8]

   - `Number` 对象提供了用于处理和转换数字的静态方法和属性。

     - Number.isNaN(x): 判断值是否为 NaN（非数字）。

     ```javascript
     Number.isNaN(NaN); // true
     ```

     - Number.isFinite(x): 判断值是否为有限数值。

     ```javascript
     Number.isFinite(10); // true
     Number.isFinite(Infinity); // false
     ```

     - Number.isInteger(x): 判断值是否为整数。

     ```javascript
     Number.isInteger(10); // true
     Number.isInteger(10.5); // false
     ```

     - Number.parseInt(string): 将字符串解析成整数。

     ```javascript
     Number.parseInt("10.5"); // 10
     ```

     - Number.parseFloat(string): 将字符串解析成浮点数。

     ```javascript
     Number.parseFloat("10.5"); // 10.5
     ```

     - Number.toFixed(digits): 将数字格式化为指定小数位数的字符串。

     ```javascript
     let num = 12.34567;
     num.toFixed(2); // "12.35"
     ```

     - Number.toPrecision(digits): 将数字格式化为指定精度的字符串。

     ```javascript
     let num = 12.34567;
     num.toPrecision(4); // "12.35"
     ```

     - Number.toExponential(fractionDigits): 将数字格式化为指数记数法的字符串。

     ```javascript
     let num = 123456;
     num.toExponential(2); // "1.23e+5"
     ```

3. 类型转换 [3]

   - parseInt(string, radix): 将字符串转换为整数，第二个参数是基数（如 10 进制、16 进制等）。

   ```javascript
   parseInt("FF", 16); // 255
   ```

   - parseFloat(string): 将字符串转换为浮点数。

   ```javascript
   parseFloat("3.14"); // 3.14
   ```

   - Number(string): 将字符串转换为数字。

   ```javascript
   Number("123"); // 123
   ```

4. 比较方法 [3]

   - Number.EPSILON: 表示在 JavaScript 中能够表示的最小间隔。

   ```javascript
   let x = 0.1 + 0.2;
   let y = 0.3;
   Math.abs(x - y) < Number.EPSILON; // true
   ```

   - Number.MAX_SAFE_INTEGER: JavaScript 中能够安全表示的最大整数。

   ```javascript
   Number.MAX_SAFE_INTEGER; // 9007199254740991
   ```

   - Number.MIN_SAFE_INTEGER: JavaScript 中能够安全表示的最小整数。

   ```javascript
   Number.MIN_SAFE_INTEGER; // -9007199254740991
   ```

5. 格式化数字 [1]

   - toLocaleString(locale, options): 根据指定的区域和选项将数字格式化为字符串。

   ```javascript
   let x = 0.1 + 0.2;
   let num = 1234567.89;
   num.toLocaleString("en-US"); // "1,234,567.89"
   num.toLocaleString("de-DE"); // "1.234.567,89"
   num.toLocaleString("en-US", { style: "currency", currency: "USD" }); // "$1,234,567.89"
   let y = 0.3;
   Math.abs(x - y) < Number.EPSILON; // true
   ```

### String

1. 基本字符串操作
2. 字符串转换
3. 字符串截取
4. 字符串替换
5. 字符串分割与合并
6. 去除空格
7. 重复字符串
8. 检查字符串开头和结尾
9. 原始字符串操作

### 引用数据类型
