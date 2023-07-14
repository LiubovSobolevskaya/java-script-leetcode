/**
 * @param {Function} fn
 */


const seenSymbols = [];
let objCounter = 0;

const parser = (_, val) => {
    if (typeof val === 'symbol') {
        const idx = seenSymbols.indexOf(val);
        if (idx == -1) {
            seenSymbols.push(val);
            return `symbol${seenSymbols.length - 1}`;
        }
        return `symbol${idx}`;
    }

    if (val && typeof val === 'object') {
        if (!val.used) {
            Object.defineProperty(val, "used", { value: ++objCounter });
        }
        return { ...val, used: val.used };
    }

    return val === undefined ? "undefined" : val;
}


function memoize(fn) {
    const map = new Map();

    return function (...args) {
        const key = args.map(element => JSON.stringify(element, parser)).join("+");
        console.log(key);
        if (map.has(key)) {
            return map.get(key);
        }
        let res = fn(...args);
        map.set(key, res)
        return res;

    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */