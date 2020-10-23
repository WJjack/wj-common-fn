import { ArrayDesc, CookieOptions } from "./types";

/**
 * @description 深度克隆
 * @param o
 */
export function deepCopy(o: any): any {
    if (o instanceof Array) {
        let n = [];
        for (let i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else if (o instanceof Object) {
        let n: { [propname: string]: any } = {};
        for (let i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}

/**
 * @description 是否为空
 * @param val
 */
export function isEmpty(val: any) {
    return val === null || val === undefined || val === "";
}

/**
 * @description 节流
 * @param fn
 * @param wait
 */
export function throttle(fn: Function, wait: number) {
    let timer: NodeJS.Timeout | null = null;
    return function () {
        let context = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, wait);
        }
    };
}

/**
 * @description 防抖
 * @param fn
 * @param wait
 */
export function debounce(fn: Function, wait: number) {
    var timer: number | null = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    };
}

/**
 * @description 将文件转换成base64
 * @param {*} file
 * @returns Promise<unknown>
 */
export function getBase64(file): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            resolve(ev.target.result);
        };
        reader.readAsDataURL(file);
    });
}

/**
 * @description 设置cookie
 * @param {String} name  关键字
 * @param {String} value 要存储的指
 * @param { CookieOptions } config { type: "天", expires: 1 }
 */
export function setCookie(
    name: string,
    value: string,
    config: CookieOptions = { type: "天", expires: 1 }
) {
    let oDate = new Date();
    let expires = null;
    if (config.expires) {
        if (config.type) {
            switch (config.type) {
                case "秒":
                    oDate.setSeconds(oDate.getSeconds() + config.expires);
                    expires = oDate.toUTCString();
                    break;
                case "分":
                    oDate.setMinutes(oDate.getMinutes() + config.expires);
                    expires = oDate.toUTCString();
                    break;
                case "时":
                    oDate.setHours(oDate.getHours() + config.expires);
                    expires = oDate.toUTCString();
                    break;
                case "天":
                    oDate.setDate(oDate.getDate() + config.expires);
                    expires = oDate.toUTCString();
                    break;
                case "月":
                    oDate.setMonth(oDate.getMonth() + config.expires);
                    expires = oDate.toUTCString();
                    break;
                case "年":
                    oDate.setFullYear(oDate.getFullYear() + config.expires);
                    expires = oDate.toUTCString();
                    break;
                default:
                    oDate.setDate(oDate.getDate() + config.expires);
                    expires = oDate.toUTCString();
                    break;
            }
        } else {
            oDate.setDate(oDate.getDate() + config.expires);
            expires = oDate.toUTCString();
        }
    } else {
        oDate.setDate(oDate.getDate() + 1);
        expires = oDate.toUTCString();
    }

    document.cookie =
        name + "=" + encodeURIComponent(value) + ";expires=" + expires;
}

/**
 * @description 获取cookie
 * @param {String} key 关键字
 */
export function getCookie(key: string) {
    let str = document.cookie.replace(/;\s*/, ";");
    let cookieArr = str.split(";");
    let cookieObj = {};
    let len = cookieArr.length;
    for (let i = 0; i < len; i++) {
        let data = cookieArr[i];
        let k = data.split("=")[0];
        let v = data.split("=")[1];
        cookieObj[k] = v;
    }
    if (cookieObj[key]) {
        return decodeURIComponent(cookieObj[key]);
    } else {
        return false;
    }
}

/**
 * @description 删除cookie
 * @param { String } key
 */
export function delCookie(key: string) {
    document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

/**
 * @description 返回一个在范围内的随机数
 * @param { Number } n1 起始
 * @param { Number } n2 结束
 * @returns { Number }
 */
export function randomNumber(n1: number, n2: number) {
    return Math.round(n1 + Math.random() * (n2 - n1));
}

/**
 * @description 字母大小写切换
 * @param { String } str
 * @param { Number } type 数字 1:首字母大写、2：首母小写、3：大小写转换、4：全部大写、5：全部小写
 * @returns { String }
 */
export function changeCase(str: string, type: number) {
    function ToggleCase(str) {
        var itemText = "";
        str.split("").forEach(function (item) {
            if (/^([a-z]+)/.test(item)) {
                itemText += item.toUpperCase();
            } else if (/^([A-Z]+)/.test(item)) {
                itemText += item.toLowerCase();
            } else {
                itemText += item;
            }
        });
        return itemText;
    }

    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * @description 数组排序
 * @param arr 数组
 * @param desc 排序方式 'asc'升序，'desc'降序
 */
export function arraySort(arr: number[], desc: ArrayDesc = "asc") {
    if (desc === "asc") {
        return arr.sort(function (x, y) {
            return y - x;
        });
    } else {
        return arr.sort(function (x, y) {
            return x - y;
        });
    }
}

/**
 * @description 对象数组快速排序
 * @param arr
 * @param key 排序依据关键字
 * @param desc 排序方式 'asc'升序，'desc'降序
 * @returns any
 */
export function arrayObjSort(arr: any[], key: string, desc: ArrayDesc = "asc") {
    key = key || "id";
    desc = desc || null;
    if (arr.length == 0) return [];

    let left = new Array();
    let right = new Array();
    let pivot = arr[0][key]; //分割值
    let pivotObj = arr[0]; //存储值

    if (desc === "asc") {
        //升序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
    } else {
        //降序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] > pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
    }
    return arrayObjSort(left, key, desc).concat(
        pivotObj,
        arrayObjSort(right, key, desc)
    );
}

/**
 * @description 数组去重
 * @param arr
 * @returns any[]
 */
export function arrayUnique(arr: any[]) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.slice(i + 1, arr.length);
        if (temp.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        } else {
            continue;
        }
    }
    return result;
}

/**
 * @description 数组的交集
 * @param arr1
 * @param arr2
 * @returns any[]
 */
export function arrayIntersection(arr1: any[], arr2: any[]) {
    let result = [];
    arrayUnique(arr1).forEach(function (x) {
        arr2.forEach(function (y) {
            if (x === y) result.push(x);
        });
    });
    return result;
}

/**
 * @description 数组的差集 arr1-arr2
 * @param arr1
 * @param arr2
 * @returns any[]
 */
export function arrayMinus(arr1: any[], arr2: any[]) {
    let result = [];
    arr1.forEach(function (x) {
        if (arr2.indexOf(x) === -1) {
            result.push(x);
        } else {
            return;
        }
    });
    return result;
}

/**
 * @description 数组的并集，参数可以使多个
 * @returns any[]
 */
export function arrayUnion(...args) {
    var arr = [];
    for (var i = 0; i < args.length; i++) {
        arr = arr.concat(args[i]);
    }
    return arrayUnique(arr);
}

/**
 * @description 是否是一个类
 * @param obj
 * @param { Boolean } strict 是否严格模式
 * @returns boolean
 */
export function isClass(obj: any, strict: boolean = true) {
    if (typeof obj !== "function") return false;

    var str = obj.toString();

    // async function or arrow function
    if (obj.prototype === undefined) return false;
    // generator function or malformed definition
    if (obj.prototype.constructor !== obj) return false;
    // ES6 class
    if (str.slice(0, 5) == "class") return true;
    // has own prototype properties
    if (Object.getOwnPropertyNames(obj.prototype).length >= 2) return true;
    // anonymous function
    if (/^function\s+\(|^function\s+anonymous\(/.test(str)) return false;
    // ES5 class without `this` in the body and the name's first character
    // upper-cased.
    if (strict && /^function\s+[A-Z]/.test(str)) return true;
    // has `this` in the body
    if (/\b\(this\b|\bthis[\.\[]\b/.test(str)) {
        // not strict or ES5 class generated by babel
        if (!strict || /classCallCheck\(this/.test(str)) return true;

        return /^function\sdefault_\d+\s*\(/.test(str);
    }

    return false;
}

/**
 * @description 判断是否是正则表达式
 * @param value
 * @returns boolean
 */
export function isRegExp(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object RegExp]";
}

/**
 * @description 判断是否是日期对象
 * @param value
 * @returns boolean
 */
export function isDate(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Date]";
}

/**
 * @description 判断value是否是浏览器内置对象
 * @param value
 * @returns boolean
 */
export function isNative(value: any): boolean {
    return typeof value === "function" && /native code/.test(value.toString());
}

/**
 * @description cached：记忆函数：缓存函数的运算结果
 * @param fn (str: any) => any
 * @returns (str: any) => any
 */
export function cached(fn: (str: any) => any) {
    let cache = Object.create(null);
    return function cachedFn(str) {
        let hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}

/**
 * @description 横线转驼峰命名
 * @param str
 * @returns string
 */
export function camelize(str: string): string {
    const camelizeRE = /-(\w)/g;
    return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : "";
    });
}

/**
 * @description 下划线转驼峰命名
 * @param str
 * @returns string
 */
export function _2camelize(str: string): string {
    const camelizeRE = /_(\w)/g;
    return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : "";
    });
}

/**
 * @description 驼峰命名转横线命名：拆分字符串，使用 - 相连，并且转换为小写
 * @param str
 * @returns string
 */
export function hyphenate(str: string): string {
    let hyphenateRE = /\B([A-Z])/g;
    return str.replace(hyphenateRE, "-$1").toLowerCase();
}

/**
 * @description 获取浏览器信息
 * @returns { type: string; version: number; }
 */
export function getExplorerInfo() {
    let t = navigator.userAgent.toLowerCase();
    return 0 <= t.indexOf("msie")
        ? {
              //ie < 11
              type: "IE",
              version: Number(t.match(/msie ([\d]+)/)[1]),
          }
        : !!t.match(/trident\/.+?rv:(([\d.]+))/)
        ? {
              // ie 11
              type: "IE",
              version: 11,
          }
        : 0 <= t.indexOf("edge")
        ? {
              type: "Edge",
              version: Number(t.match(/edge\/([\d]+)/)[1]),
          }
        : 0 <= t.indexOf("firefox")
        ? {
              type: "Firefox",
              version: Number(t.match(/firefox\/([\d]+)/)[1]),
          }
        : 0 <= t.indexOf("chrome")
        ? {
              type: "Chrome",
              version: Number(t.match(/chrome\/([\d]+)/)[1]),
          }
        : 0 <= t.indexOf("opera")
        ? {
              type: "Opera",
              version: Number(t.match(/opera.([\d]+)/)[1]),
          }
        : 0 <= t.indexOf("Safari")
        ? {
              type: "Safari",
              version: Number(t.match(/version\/([\d]+)/)[1]),
          }
        : {
              type: t,
              version: -1,
          };
}

/**
 * @description 检测是否为PC端浏览器模式
 * @returns boolean
 */
export function isPCBroswer() {
    let e = navigator.userAgent.toLowerCase(),
        t = "ipad" == e.match(/ipad/i)[0],
        i = "iphone" == e.match(/iphone/i)[0],
        r = "midp" == e.match(/midp/i)[0],
        n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)[0],
        a = "ucweb" == e.match(/ucweb/i)[0],
        o = "android" == e.match(/android/i)[0],
        s = "windows ce" == e.match(/windows ce/i)[0],
        l = "windows mobile" == e.match(/windows mobile/i)[0];
    return !(t || i || r || n || a || o || s || l);
}


/**
 * @description base64数据导出文件，文件下载
 * @param { String } filename 下载后的文件名称
 * @param { String } data 要下载的base64数据
 */
export function downloadFile(filename: string, data: string) {
    let DownloadLink = document.createElement("a");

    if (DownloadLink) {
        document.body.appendChild(DownloadLink);
        DownloadLink.style.display = "none";
        DownloadLink.download = filename;
        DownloadLink.href = data;

        if (document.createEvent) {
            let DownloadEvt = document.createEvent("MouseEvents");

            DownloadEvt.initEvent("click", true, false);
            DownloadLink.dispatchEvent(DownloadEvt);
        } else if (typeof DownloadLink.onclick == "function")
            DownloadLink.onclick.call(this);
        //   else if ( document.createEventObject )
        //     DownloadLink.fireEvent('onclick');

        document.body.removeChild(DownloadLink);
    }
}

/**
 * @description 浏览器放大全屏
 */
export function toFullScreen() {
    interface Elem extends HTMLElement, Object {
        [k: string]: any;
    }
    let elem: Elem = document.documentElement || document.body;
    elem.webkitRequestFullScreen
        ? elem.webkitRequestFullScreen()
        : elem.mozRequestFullScreen
        ? elem.mozRequestFullScreen()
        : elem.msRequestFullscreen
        ? elem.msRequestFullscreen()
        : elem.requestFullScreen
        ? elem.requestFullScreen()
        : alert("浏览器不支持全屏");
}

/**
 * @description 浏览器退出全屏
 */
export function exitFullscreen() {
    interface Elem extends Document, Object {
        [k: string]: any;
    }
    let elem: Elem = document;
    elem.webkitCancelFullScreen
        ? elem.webkitCancelFullScreen()
        : elem.mozCancelFullScreen
        ? elem.mozCancelFullScreen()
        : elem.cancelFullScreen
        ? elem.cancelFullScreen()
        : elem.msExitFullscreen
        ? elem.msExitFullscreen()
        : elem.exitFullscreen
        ? elem.exitFullscreen()
        : alert("切换失败,可尝试Esc退出");
}

// window动画
export const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        window.setTimeout(callback, 1000 / 60);
    };
// window.mozRequestAnimationFrame ||
// window.msRequestAnimationFrame ||
// window.oRequestAnimationFrame ||

// 取消window动画
export const cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    function (id) {
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        window.clearTimeout(id);
    };

// window.mozCancelAnimationFrame ||
// window.msCancelAnimationFrame ||
// window.oCancelAnimationFrame ||

