/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    retArr = [];
    for (let i = 0; i < arr.length; i++) {
        element = arr[i];
        if (fn.length === 1) {
            if (fn(element)) {
                retArr.push(element);
            }

        }
        else {
            if (fn(element, i)) {
                retArr.push(element);
            }

        }
    };
    return retArr;
};