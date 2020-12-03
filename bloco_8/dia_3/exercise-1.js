// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, arr) => acc.concat(arr));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
