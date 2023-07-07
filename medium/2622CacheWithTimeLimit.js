var TimeLimitedCache = function () {
    this.dictionary = {};
    this.duration = {};
    this.createTime = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.dictionary[key] && Date.now() - this.createTime[key] <= this.duration[key]) {
        this.dictionary[key] = value;
        this.duration[key] = duration;
        this.createTime[key] = Date.now()
        return true;
    }

    if (!this.dictionary[key]) {
        this.dictionary[key] = value;
        this.duration[key] = duration;
        this.createTime[key] = Date.now();
    }
    return false;

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.dictionary[key] && Date.now() - this.createTime[key] <= this.duration[key]) {
        return this.dictionary[key];
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    count = 0;
    Object.keys(this.dictionary).forEach(element => {
        if (this.dictionary[element] && Date.now() - this.createTime[element] <= this.duration[element]) {
            count++;
        }
    })
    return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */