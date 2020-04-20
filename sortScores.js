const sortScores = (unsortedScores, HIGHEST_POSSIBLE_SCORE) => {
  let scoreObj = {};
  for (let i = 0; i < unsortedScores.length; i++) {
    if (unsortedScores[i] <= HIGHEST_POSSIBLE_SCORE){
      if (!scoreObj[HIGHEST_POSSIBLE_SCORE - unsortedScores[i]]) {
        scoreObj[HIGHEST_POSSIBLE_SCORE - unsortedScores[i]] = [ unsortedScores[i]]
      } else {
        scoreObj[HIGHEST_POSSIBLE_SCORE - unsortedScores[i]].push(unsortedScores[i]);
      }
    }
    continue;
  }
  const objKeys = Object.keys(scoreObj);
  console.log(scoreObj);
  let result = [];
  objKeys.forEach(element => {
    result.push(...scoreObj[element])
  })
  return result
}

module.exports = sortScores;
