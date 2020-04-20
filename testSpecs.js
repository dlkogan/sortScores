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
  it('Sorts duplicate scores', () => {
    expect(sortScores([52,52,94,13,99,13,52], 100)).to.eql([99,94,52,52,52,13,13])
  })
});
