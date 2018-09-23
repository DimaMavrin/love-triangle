/**
* @param preferences - an array of integers. Indices of people, whom they love
* @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let counter = 0;
  let traversalMap = preferences.map(item => false);
  const normalizedPrefsWithoutNarcissists = preferences.map(item => item - 1).map((item, index) => item === index ? -1 : item);

  for (let i = 0; i < normalizedPrefsWithoutNarcissists.length; i++) {
    if (!traversalMap[i] && isTriangle(normalizedPrefsWithoutNarcissists, i)) {
      markAsTraversed(normalizedPrefsWithoutNarcissists, traversalMap, i);
      counter++;
    }
  }

  return counter;
};

function isTriangle(preferences, iof) {
  let firstPref = preferences[iof];
  let secondPref = preferences[firstPref];
  let thirdPref = preferences[secondPref];

  return thirdPref === iof;
}

function markAsTraversed(preferences, traversalMap, iof) {
  let firstPref = preferences[iof];
  let secondPref = preferences[firstPref];

  traversalMap[iof] = true;
  traversalMap[firstPref] = true;
  traversalMap[secondPref] = true;
}