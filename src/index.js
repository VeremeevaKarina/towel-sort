module.exports = function towelSort (matrix) {
  const sortedArr = [];
  if (matrix === undefined) {
    return sortedArr;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }

    for (let j = 0; j < matrix[i].length; j++) {
      sortedArr.push(matrix[i][j]);
    }
  }
  return sortedArr;
}