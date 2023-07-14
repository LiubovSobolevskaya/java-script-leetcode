/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }
    const output = 
    for (const key in obj) {
        const value = compactObject(obj[key]);
        if (Boolean(value)) {
            output[key] = value;
        }
    }
    return output;

};