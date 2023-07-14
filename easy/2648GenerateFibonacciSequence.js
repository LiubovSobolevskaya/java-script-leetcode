/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {

    let seq = [0, 1];
    yield seq[0];
    yield seq[1];

    while (true) {
        const newEl = seq[0] + seq[1];
        seq[0] = seq[1];
        seq[1] = newEl;
        yield newEl;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */