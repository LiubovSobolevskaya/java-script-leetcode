// Class declaration for EventEmitter
class EventEmitter {

    // Object that will store the events and their associated callback functions
    callbacks = {};

    // Method to add an event and its associated callback function
    subscribe(event, cb) {

        // If the event doesn't exist in the callbacks object, create an empty array for it
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }

        // Add the callback function to the event's array
        this.callbacks[event].push(cb);

        // Return an object with an unsubscribe method, which can be used to remove the callback from the event
        return {
            unsubscribe: () => {
                // Check if the event exists and if there are any callbacks
                if (this.callbacks[event] && this.callbacks[event].length >= 1) {
                    // Remove the first callback from the event's array
                    const res = this.callbacks[event].shift();
                } else {
                    // If there are no callbacks left for the event, remove the event from the callbacks object
                    delete this.callbacks[event];
                }
            }
        };
    }

    // Method to emit an event, which will run all of the event's callbacks with the provided arguments
    emit(event, args = []) {

        // If the event doesn't exist in the callbacks object, return an empty array
        if (!this.callbacks[event]) {
            return [];
        }

        // Create an empty array to store the results of the callbacks
        const result = [];

        // Loop through each of the event's callbacks
        for (let i = 0; i < this.callbacks[event].length; i++) {
            // Run the callback with the provided arguments and store the result
            result.push(this.callbacks[event][i](...args));
        }

        // Return the results of the callbacks
        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */