const { expect } = require('chai');
const sortScores = require('./sortScores');

describe('sortScores', () => {
  it('If we have only one score, return just that score.', () => {
    expect(sortScores([22], 100)).to.eql([22]);
  });
  it('No scores in the array will exceed the highest number', () => {
    expect(sortScores([22,2000], 100)).to.eql([22])
  })
  it('Receives an array and sorts it', () => {
    expect(sortScores([89,2,47,99,4], 100)).to.eql([99,89,47,4,2])
  })
});
