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
        let n: {[propname: string]: any} = {}
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
    return (val === null || val === undefined || val === '');
}

/**
 * @description 节流
 * @param fn 
 * @param wait 
 */
export function throttle(fn: Function, wait: number) {
    let timer: NodeJS.Timeout | null = null;
    return function() {
        let context = this;
        let args = arguments;
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, wait);
        }
    }
}

/**
 * @description 防抖
 * @param fn 
 * @param wait 
 */
export function debounce(fn: Function, wait: number) {
    var timer: number | null = null;
    return function(){
        if(timer !== null){
            clearTimeout(timer);
        }
        timer = setTimeout(fn,wait);
    }
}

/**
 * @description 将文件转换成base64
 * @param {*} file 
 * @returns Promise<unknown>
 */
export function getBase64(file): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = ev => {
        resolve(ev.target.result);
      };
      reader.readAsDataURL(file);
    });
};