### 常用函数
deepCopy， isEmpty， throttle， debounce， getBase64等等

### 安装
`npm i wj-common-fn -S`

### 使用
```javascript
import { deepCopy, isEmpty, throttle, debounce, getBase64 } from 'wj-common-fn';
let a = [1];
let b = deepCopy(a);
```

### 函数列表

| 函数或属性名称 | 说明 | 返回 |
| ------- | ---- | ---- |
| deepCopy | 深度克隆 deepCopy(o: any) | any |
| isEmpty | 是否为空 isEmpty(val: any) | boolean |
| throttle | 节流 throttle(fn: Function, wait: number) | () => void |
| debounce | 防抖 debounce(fn: Function, wait: number) | () => void |
| getBase64 | 将文件转换成base64 getBase64(file) | Promise<unknown> |
| setCookie | 设置cookie setCookie(name: string,value: string,config: CookieOptions = { type: "天", expires: 1 }) | void |
| getCookie | 获取cookie getCookie(key: string) | string or false |
| delCookie | 删除cookie delCookie(key: string) | void |
| randomNumber | 返回一个在范围内的随机数 randomNumber(n1: number, n2: number) | number |
| changeCase | 字母大小写切换, changeCase(str: string, type: number), type 数字 1:首字母大写、2：首母小写、3：大小写转换、4：全部大写、5：全部小写 | string |
| arraySort | 数组排序，arraySort(arr: number[], desc: ArrayDesc = "asc")，desc 排序方式 'asc'升序，'desc'降序 | number[] |
| arrayObjSort | 对象数组快速排序，arrayObjSort(arr: any[], key: string, desc: ArrayDesc = "asc")，key 排序依据关键字，desc 排序方式 'asc'升序，'desc'降序 | any |
| arrayUnique | 数组去重，arrayUnique(arr: any[]) | any[] |
| arrayIntersection | 数组的交集，arrayIntersection(arr1: any[], arr2: any[]) | any[] |
| arrayMinus | 数组的差集 arr1-arr2，arrayMinus(arr1: any[], arr2: any[]) | any[] |
| arrayUnion | 数组的并集，参数可以使多个，arrayUnion(...args) | any[] |
| isClass | 是否是类，isClass(obj: any, strict: boolean = true) |  boolean |
| isRegExp | 是否是正则表达式，isRegExp(value: any): boolean | boolean |
| isDate | 是否是日期对象，isDate(value: any): boolean | boolean |
| isNative | 是否是浏览器内置对象，isNative(value: any): boolean| boolean |
| cached | 记忆函数：缓存函数的运算结果，cached(fn: (str: any) => any) | (str: any) => any |
| camelize | 横线转驼峰命名，camelize(str: string): string | string |
| _2camelize | 下划线转驼峰命名，_2camelize(str: string): string | string |
| hyphenate | 驼峰命名转横线命名：拆分字符串，使用 - 相连，并且转换为小写，hyphenate(str: string): string | string |
| getExplorerInfo | 获取浏览器信息，getExplorerInfo() | { type: string; version: number; } |
| isPCBroswer | 检测是否为PC端浏览器模式，isPCBroswer() | boolean |
| downloadFile | base64数据导出文件，文件下载，downloadFile(filename: string, data: string) | void |
| toFullScreen | 浏览器放大全屏，toFullScreen() | void |
| exitFullscreen | 浏览器退出全屏，exitFullscreen() | void |
| requestAnimationFrame | window动画，requestAnimationFrame是一个常量函数 | none |
| cancelAnimationFrame | 取消window动画，cancelAnimationFrame是一个常量函数 | none |


### github源代码
<https://github.com/WJjack/wj-common-fn.git>