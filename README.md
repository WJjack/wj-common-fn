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

| 函数名称 | 说明 | 返回 |
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
| getBase64ByUrl | 实现将项目的图片路径转化成base64，getBase64ByUrl(img: string) | Promise<unknown> |
| getBase64Image |将DOM元素img转换为base4的主要方法，getBase64Image(img: HTMLImageElement,width?: number,height?:number) | string |
| convertBase64ToBlob | base64转Blob，convertBase64ToBlob(base64: string) | Blob |
| toFileByUrl | 将图片路径转换成file文件类型，toFileByUrl(url: string, name?: string) | Promise<unknown> |
| isJson | 判断是否是json数据，isJson(obj) | boolean |
| hideElements | 隐藏制定的所有元素，hideElements(...el: HTMLElementTagNameMap[keyof HTMLElementTagNameMap][]) | void |
| hasClassName | 元素是否具有指定的类，hasClassName(el:  HTMLElementTagNameMap[keyof HTMLElementTagNameMap], className: string) | boolean |
| getScrollPosition | 获取当前页面的滚动位置，getScrollPosition(el: any | Window = window) | { x: any, y: any } |
| scrollToTop | 滚动到顶部，scrollToTop() | void |
| elementContains | 父元素是否包含子元素，elementContains(parent:  HTMLElementTagNameMap[keyof HTMLElementTagNameMap], child:  HTMLElementTagNameMap[keyof HTMLElementTagNameMap]) | boolean |
| elementIsVisibleInViewport | 指定元素是否在视口可见，elementIsVisibleInViewport(el: HTMLElementTagNameMap[keyof HTMLElementTagNameMap], partiallyVisible = false) | boolean |
| detectDeviceType | 分辨设备是移动设备还是桌面设备，detectDeviceType() | "Mobile" or "Desktop" |
| getURLParameters | 获取当前 URL参数的对象，getURLParameters(url: string) | {} |
| getDaysDiffBetweenDates| 获取两个日期之间的天数间隔，getDaysDiffBetweenDates(dateInitial: number, dateFinal: number) | number |
| counter | 为指定选择器创建具有指定范围、步长和持续时间的计时器，counter(selector: string, start: number, end: number, step = 1, duration = 2000) | NodeJS.Timeout |
| copyToClipboard | 将一个字符串复制到剪贴板，copyToClipboard(str: string) | void |


### github源代码
<https://github.com/WJjack/wj-common-fn.git>