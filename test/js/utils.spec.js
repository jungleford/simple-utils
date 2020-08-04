import {expect} from 'chai';

import {Utils} from '../../src/js';

describe('[@jungleford/simple-utils] test suite:', () => {

  it('generateGradualColors()', () => {
    // Invalid arguments
    expect(Utils.generateGradualColors.bind(Utils, 0)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateGradualColors.bind(Utils, -1)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateGradualColors.bind(Utils, 3.5)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateGradualColors.bind(Utils, '1')).to.throw('`count` must be a positive integer.');
    expect(Utils.generateGradualColors.bind(Utils, [1, 2])).to.throw('`count` must be a positive integer.');
    expect(Utils.generateGradualColors.bind(Utils, {number: 1})).to.throw('`count` must be a positive integer.');
    expect(Utils.generateGradualColors.bind(Utils, null)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateGradualColors.bind(Utils, undefined)).to.throw('`count` must be a positive integer.');

    // Expected results
    expect(Utils.generateGradualColors(1)).to.have.lengthOf(1);
    expect(Utils.generateGradualColors(1)).to.eql(['#000000']); // deep equal
    expect(Utils.generateGradualColors(4)).to.have.lengthOf(4);
    expect(Utils.generateGradualColors(4)).to.eql(['#000000', '#400000', '#800000', '#C00000']); // deep equal
  });

  it('generateGradualColorMatrix()', () => {
    // Invalid arguments
    expect(Utils.generateGradualColorMatrix.bind(Utils, 0)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateGradualColorMatrix.bind(Utils, -1)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateGradualColorMatrix.bind(Utils, 3.5)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateGradualColorMatrix.bind(Utils, '1')).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateGradualColorMatrix.bind(Utils, [1, 2])).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateGradualColorMatrix.bind(Utils, {number: 1})).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateGradualColorMatrix.bind(Utils, null)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateGradualColorMatrix.bind(Utils, undefined)).to.throw('`rowCount` must be a positive integer.');

    // Expected results
    expect(Utils.generateGradualColorMatrix(1)).to.have.lengthOf(1);
    expect(Utils.generateGradualColorMatrix(1)[0]).to.have.lengthOf(1);
    expect(Utils.generateGradualColorMatrix(1)).to.eql([
                                                         ['#000000']
                                                       ]); // deep equal
    let colors4x4 = Utils.generateGradualColorMatrix(4);
    expect(colors4x4).to.have.lengthOf(4);
    colors4x4.forEach(row => {
      expect(row).to.have.lengthOf(4);
    });
    expect(colors4x4).to.eql(
      [
        ['#000000', '#004000', '#008000', '#00C000'],
        ['#400000', '#404000', '#408000', '#40C000'],
        ['#800000', '#804000', '#808000', '#80C000'],
        ['#C00000', '#C04000', '#C08000', '#C0C000']
      ]
    ); // deep equal
  });

  it('getReverseColor()', () => {
    // Invalid arguments
    expect(Utils.getReverseColor.bind(Utils, 0)).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, -1)).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, 3.5)).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, 1)).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, 'X')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, '1111111')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, '@11111')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, '#1111111')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, 'abcdefg')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, '#abcdefg')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, 'ABCDEFG')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, '#ABCDEFG')).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, [1, 2])).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, {number: 1})).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, null)).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');
    expect(Utils.getReverseColor.bind(Utils, undefined)).to.throw('`color` must be a positive integer with hex format between #000000 and #FFFFFF, or between #000 and #FFF.');

    // Expected results
    expect(Utils.getReverseColor('001')).to.equal('#FFE');
    expect(Utils.getReverseColor('#abc')).to.equal('#543');
    expect(Utils.getReverseColor('000001')).to.equal('#FFFFFE');
    expect(Utils.getReverseColor('011111')).to.equal('#FEEEEE');
    expect(Utils.getReverseColor('#011111')).to.equal('#FEEEEE');
    expect(Utils.getReverseColor('#abcdef')).to.equal('#543210');
    expect(Utils.getReverseColor('#FEDCBA')).to.equal('#012345');
    expect(Utils.getReverseColor('aBcDeF')).to.equal('#543210');
    expect(Utils.getReverseColor('#aBcDeF')).to.equal('#543210');
  });

  it('generateNaturalSequence()', () => {
    // Invalid arguments
    expect(Utils.generateNaturalSequence.bind(Utils, 0)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateNaturalSequence.bind(Utils, -1)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateNaturalSequence.bind(Utils, 3.5)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateNaturalSequence.bind(Utils, '1')).to.throw('`count` must be a positive integer.');
    expect(Utils.generateNaturalSequence.bind(Utils, [1, 2])).to.throw('`count` must be a positive integer.');
    expect(Utils.generateNaturalSequence.bind(Utils, {number: 1})).to.throw('`count` must be a positive integer.');
    expect(Utils.generateNaturalSequence.bind(Utils, null)).to.throw('`count` must be a positive integer.');
    expect(Utils.generateNaturalSequence.bind(Utils, undefined)).to.throw('`count` must be a positive integer.');

    // Expected results
    expect(Utils.generateNaturalSequence(1)).to.eql([1]);
    expect(Utils.generateNaturalSequence(10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('generateNaturalMatrix()', () => {
    // Invalid arguments
    expect(Utils.generateNaturalMatrix.bind(Utils, 0)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateNaturalMatrix.bind(Utils, -1)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateNaturalMatrix.bind(Utils, 3.5)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateNaturalMatrix.bind(Utils, '1')).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateNaturalMatrix.bind(Utils, [1, 2])).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateNaturalMatrix.bind(Utils, {number: 1})).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateNaturalMatrix.bind(Utils, null)).to.throw('`rowCount` must be a positive integer.');
    expect(Utils.generateNaturalMatrix.bind(Utils, undefined)).to.throw('`rowCount` must be a positive integer.');

    // Expected results
    expect(Utils.generateNaturalMatrix(1)).to.have.lengthOf(1);
    expect(Utils.generateNaturalMatrix(1)[0]).to.have.lengthOf(1);
    expect(Utils.generateNaturalMatrix(1)).to.eql([
                                                    [1]
                                                  ]); // deep equal
    let numbers4x4 = Utils.generateNaturalMatrix(4);
    expect(numbers4x4).to.have.lengthOf(4);
    numbers4x4.forEach(row => {
      expect(row).to.have.lengthOf(4);
    });
    expect(numbers4x4).to.eql(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]
    ); // deep equal
  });

  it('matrixToArray()', () => {
    // Invalid arguments
    expect(Utils.matrixToArray.bind(Utils, 0)).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: 0');
    expect(Utils.matrixToArray.bind(Utils, -1)).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: -1');
    expect(Utils.matrixToArray.bind(Utils, 3.5)).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: 3.5');
    expect(Utils.matrixToArray.bind(Utils, '1')).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: 1');
    expect(Utils.matrixToArray.bind(Utils, {number: 1})).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: [object Object]');
    expect(Utils.matrixToArray.bind(Utils, null)).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: null');
    expect(Utils.matrixToArray.bind(Utils, undefined)).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: undefined');
    expect(Utils.matrixToArray.bind(Utils, [1, 2, 3])).to.throw('`matrix` must be a two-dimension array.\nYour `matrix` is: 1,2,3');

    // Expected results
    expect(Utils.matrixToArray(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]
    )).to.eql(Utils.generateNaturalSequence(16)); // deep equal
  });

  it('arrayToMatrix()', () => {
    // Invalid arguments
    expect(Utils.arrayToMatrix.bind(Utils, 0)).to.throw('`array` must be a one-dimension array.\nYour `array` is: 0');
    expect(Utils.arrayToMatrix.bind(Utils, -1)).to.throw('`array` must be a one-dimension array.\nYour `array` is: -1');
    expect(Utils.arrayToMatrix.bind(Utils, 3.5)).to.throw('`array` must be a one-dimension array.\nYour `array` is: 3.5');
    expect(Utils.arrayToMatrix.bind(Utils, '1')).to.throw('`array` must be a one-dimension array.\nYour `array` is: 1');
    expect(Utils.arrayToMatrix.bind(Utils, {number: 1})).to.throw('`array` must be a one-dimension array.\nYour `array` is: [object Object]');
    expect(Utils.arrayToMatrix.bind(Utils, null)).to.throw('`array` must be a one-dimension array.\nYour `array` is: null');
    expect(Utils.arrayToMatrix.bind(Utils, undefined)).to.throw('`array` must be a one-dimension array.\nYour `array` is: undefined');
    expect(Utils.arrayToMatrix.bind(Utils, [1, 2, 3])).to.throw('`array` must be a one-dimension array of n^2 members.\nYour `array` is: 1,2,3\nThere are 3 members in total.');
    expect(Utils.arrayToMatrix.bind(Utils, [1, 2, 3, 4], null, 2)).to.throw('`count` and `rowCount` must be integers, and `count` must be a square of `rowCount`.');
    expect(Utils.arrayToMatrix.bind(Utils, [1, 2, 3, 4], 3)).to.throw('`count` and `rowCount` must be integers, and `count` must be a square of `rowCount`.');
    expect(Utils.arrayToMatrix.bind(Utils, [1, 2, 3, 4], 3, 2)).to.throw('`count` and `rowCount` must be integers, and `count` must be a square of `rowCount`.');
    expect(Utils.arrayToMatrix.bind(Utils, [1, 2, 3, 4], 9, 3)).to.throw('`array` must be a one-dimension array of 9 members.\nYour `array` is: 1,2,3,4');

    // Expected results
    expect(Utils.arrayToMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).to.eql(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]
    ); // deep equal
    expect(Utils.arrayToMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16, 4)).to.eql(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]
    ); // deep equal
  });
});