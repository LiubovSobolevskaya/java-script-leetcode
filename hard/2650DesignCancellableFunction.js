/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
    var cancel; //used to store a function that can cancel the asynchronous operation.
    const cancelPromise = new Promise((_, reject) => { cancel = () => reject("Cancelled"); });
    //The cancel function is assigned to a function that rejects this promise with the string   "Cancelled". This will be used to abort the async operation when needed.
    cancelPromise.catch(() => { }); //Attach a catch clause to the cancelPromise to avoid UnhandledPromiseRejectionWarning. In this case, the rejection is simply ignored.

    const promise = (async () => {
        let el = generator.next();
        while (!el.done) {
            try {
                el = generator.next(await Promise.race([el.value, cancelPromise]));//Promise.race function is used to race the current value of the generator (assumed to be a promise) against the cancelPromise. 
            } catch (err) {
                el = generator.throw(err); //Throw the error back into the generator. If the generator handles the error (with a try-catch block), it can recover from it and continue to yield Promises. If it doesn't handle the error, it will finish with a rejection.
            }
        }
        return el.value; //Once the generator is exhausted, return its last value.
    })();//immediately invoked


    return [cancel, promise]
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */