/**
 * Wrap common libs
 */
export default {
  /*
   * NodeJS assert
   */
  assert: typeof assert === 'undefined' ? (condition, msg) => {
    if (!condition) {
      throw new Error(msg);
    }
  } : assert,

  /*
   * Lodash
   */
  _: typeof _ === 'undefined' ? {
    isInteger: Number.isInteger,
    isString: s => typeof s === 'string',
    isArray: Array.isArray,
    parseInt: Number.parseInt,
    indexOf: (array, item) => array.indexOf(item),
    includes: (array, item) => array.indexOf(item) >= 0,
    each: (obj, fn) => {
      if (Array.isArray(obj)) {
        obj.forEach(fn);
      } else if (Object.values) {
        Object.values(obj).forEach(fn);
      }
    }, // no return value
    map: (array, fn) => array.map(fn),
    concat: (array1, array2) => array1.concat(array2),
    reverse: array => array.reverse(),
    reduce: (array, fn, accumulator) => array.reduce(fn),
    take: (array, n) => {
      if (Number.isInteger(n) && n > 0) {
        if (Array.isArray(array)) {
          return array.filter((item, index) => index >= n - 1);
        } else if (typeof array === 'string') {
          return array.substring(0, n).split('');
        } else {
          return [];
        }
      } else {
        if (Array.isArray(array) && array.length > 0) {
          return array[0];
        } else if (typeof array === 'string' && array.length > 0) {
          return [array.charAt(0)];
        } else {
          return [];
        }
      }
    },
    takeRight: (array, n) => {
      if (Number.isInteger(n) && n > 0) {
        if (Array.isArray(array)) {
          return array.filter((item, index) => index >= array.length - n && index < array.length);
        } else if (typeof array === 'string') {
          return array.substring(array.length - n).split('');
        } else {
          return [];
        }
      } else {
        if (Array.isArray(array) && array.length > 0) {
          return array[array.length - 1];
        } else if (typeof array === 'string' && array.length > 0) {
          return [array.charAt(array.length - 1)];
        } else {
          return [];
        }
      }
    },
    cloneDeep: obj => JSON.parse(JSON.stringify(obj))
  } : _
};