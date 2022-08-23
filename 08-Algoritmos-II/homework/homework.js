"use strict";
// No cambies los nombres de las funciones.
let arr = [5, 1, 4, 2, 8];

const quickSort = (array) => {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 1) return [];
  let left = [];
  let right = [];
  let pivot = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let mitad = parseInt(array.length / 2);
  let left = mergeSort(array.slice(0, mitad));
  let right = mergeSort(array.slice(mitad, array.length));
  let merge = (left, right) => {
    let data = [];
    while (left.length > 0 && right.length > 0) {
      data.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return data.concat(left).concat(right);
  };
  return merge(left, right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
