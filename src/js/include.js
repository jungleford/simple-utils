/**
 * Wrap common libs
 */
export default {
  assert: typeof assert === 'undefined' ? console.assert || ((condition, msg) => {
    if (!condition) {
      throw new Error(msg);
    }
  }) : assert,
  _: typeof _ === 'undefined' ? {
    isInteger: Number.isInteger,
    isString: s => typeof s === 'string',
    isArray: Array.isArray,
    parseInt: Number.parseInt,
    reduce: ((collection, iteratee, accumulator) => collection.reduce(iteratee))
  } : _
};