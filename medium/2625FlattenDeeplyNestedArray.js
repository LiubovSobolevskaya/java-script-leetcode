/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */



var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    let retArr = [];
    arr.forEach(element => {
        if (element instanceof Array) {
            retArr.push(...flat(element, n - 1));
        }
        else {
            retArr.push(element);
        }
    });
    return retArr;

}