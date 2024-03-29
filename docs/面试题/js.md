> esm、umd、commonjs 的区别
ESM（ECMAScript Module）是一种新的模块规范，它在浏览器和 Node.js 中都有广泛支持。

UMD（Universal Module Definition）是一种通用的模块定义规范，它在浏览器和 Node.js 中都有广泛支持。

CommonJS 是一种在服务器端使用的模块规范，它在 Node.js 中有广泛支持。

ESM 和 UMD 都是模块规范，它们都是为了解决模块化的问题。

ESM 是一种新的模块规范，它在浏览器和 Node.js 中都有广泛支持。

UMD 是一种通用的模块定义规范，它在浏览器和 Node.js 中都有广泛支持。

CommonJS 是一种在服务器端使用的模块规范，它在 Node.js 中有广泛支持。

> script 标签异步控制
script 标签的 async 和 defer 属性可以控制 script 标签的异步加载和执行。

async 属性：

- async 属性的作用是异步加载 script 标签，并在加载完成后执行 script 标签中的代码。
- async 属性的兼容性不好，在 IE8 及以下版本中不支持。

defer 属性： 

- defer 属性的作用是异步加载 script 标签，并在解析完成后执行 script 标签中的代码。
- defer 属性的兼容性较好，在所有浏览器中都支持。

preload 
prefetch

> 跨域问题
跨域问题是指浏览器不能执行其他网站的脚本。解决跨域问题的关键是服务器端设置允许跨域请求。

> 跨域问题
跨域问题是指浏览器不能执行其他网站的脚本。解决跨域问题的关键是服务器端设置允许跨域请求。

> 为什么需要虚拟dom？
1. 框架设计
2. 性能优化
3. 跨平台

> 前端路由
前端路由是指根据前端的 url 进行页面的切换，而不用刷新页面。

前端路由的实现方式有两种：hash 路由和 history 路由。

hash 路由：

- hash 路由的实现原理是将 url 中的 hash 部分作为路由的标识符，通过改变 hash 值来实现页面的切换