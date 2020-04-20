const { expect } = require('chai');
const sortScores = require('./sortScores');

describe('sortScores', () => {
  it('mocha chai is it working test...', () => {
    expect(sortScores([1,2,4], 10)).to.equal("hi");
  });
});
