/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    const functionId = Symbol();//Symbol is a built-in object whose constructor returns a symbol primitive also called a Symbol value or just a Symbol — that's guaranteed to be unique. 
    context[functionId] = this;
    return context[functionId](...args);

}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */