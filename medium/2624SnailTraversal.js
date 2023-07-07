/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }
    if (rowsCount === 1) {
        return [this];
    }
    output = Array(rowsCount).fill().map(() => Array(colsCount).fill());

    for (let j = 0; j < colsCount; j++) {
        if (j % 2 == 0) {
            for (let i = 0; i < rowsCount; i++) {
                output[i][j] = this[j * rowsCount + i];
            }
        } else {
            for (let i = rowsCount - 1; i >= 0; i--) {
                output[i][j] = this[j * rowsCount + (rowsCount - i - 1)];
            }

        }



    }
    return output;


}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */