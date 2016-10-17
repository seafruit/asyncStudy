**项目运行条件：**
需要安装node和npm

**下载项目**
```
git clone URL
```
**安装**
进入目录
```
cd studyAsync
npm install
```
**seires demo**
```
查看demo请打开series.js文件
执行demo请运行node ./series.js
```
**waterfall demo**
```
查看demo请打开waterfall.js文件
执行demo请运行node ./waterfall.js
```
**parallel demo**
```
查看demo请打开parallel.js文件
执行demo请运行node ./parallel.js
```

以上函数都是常用的async流程控制函数，以下是一些介绍。

**series函数** 串行执行
async.series(tasks,[callback]);
*它的作用就是按照顺序依次执行。*
```
series函数的第一个参数可以是一个数组也可以是一个JSON对象，参数类型不同，影响的是返回数据的格式。
当tasks中发生错误时，其err直接传给最后的callback，出错函数后面的函数不再执行。
```
**waterfall函数 **瀑布流
async.waterfall(tasks,[callback]);
*waterfall每个函数产生的值，都将传给下一个函数.*
```
 waterfall 的 tasks 参数只能是数组类型。
当tasks中发生错误时，其err直接传给最后的callback，出错函数后面的函数不再执行。
```
**parallel函数** 并行执行多个函数

async.parallel(tasks, [callback]),
```
每个函数都是立即执行，不需要等待其它函数先执行。
tasks参数可以是一个数组或是json对象。
和series函数一样，tasks参数类型不同，返回的results格式会不一样。
结果传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序。
```

[async](https://www.npmjs.com/package/async) 是[JavaScript](http://lib.csdn.net/base/javascript)的扩展库。
它可以简化[Node.js](http://lib.csdn.net/base/nodejs)异步操作的书写，使代码更容易被读懂，而不是嵌套一堆的括号让人头大。





