/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
    this.arr = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    let output = 0;
    for (let i = 0; i < this.arr.length; i++) {
        output += this.arr[i];
    }
    return output;
}

ArrayWrapper.prototype.toString = function () {

    let output = '[';
    for (let i = 0; i < this.arr.length - 1; i++) {
        output = output + this.arr[i] + ',';
    }
    if (this.arr[this.arr.length - 1]) {
        return output + this.arr[this.arr.length - 1] + ']';
    }
    else {
        return output + ']';
    }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */