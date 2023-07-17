/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    returArr = [];
    curSize = 0;
    curArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (curSize < size) {
            curArr.push(arr[i]);
            curSize++;
        }
        else {
            curSize = 1;
            returArr.push(curArr);
            curArr = [arr[i]];
        }

    }
    if (curArr.length) {
        returArr.push(curArr);
    }
    return returArr;
};