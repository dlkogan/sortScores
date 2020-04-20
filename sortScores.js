const sortScores = (unsortedScores, HIGHEST_POSSIBLE_SCORE) => {
  let scoreObj = {};
  for (let i = 0; i < unsortedScores.length; i++) {
    if (!scoreObj[HIGHEST_POSSIBLE_SCORE - unsortedScores[i]]) {
      scoreObj[HIGHEST_POSSIBLE_SCORE - unsortedScores[i]] = unsortedScores[i];
    } else {
      scoreObj[HIGHEST_POSSIBLE_SCORE - unsortedScores[i]] += 1;
    }
  }
  const objKeys = Object.keys(scoreObj);
  console.log(scoreObj);
  return objKeys.map(element => scoreObj[element]);
}

module.exports = sortScores;
