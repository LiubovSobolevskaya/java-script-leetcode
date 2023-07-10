/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    returnMap = {};
    this.forEach(element => {
        const elId = fn(element);
        if (!returnMap[elId]) {
            returnMap[elId] = [element];
        }
        else {
            returnMap[elId].push(element);
        }


    })
    return returnMap;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */