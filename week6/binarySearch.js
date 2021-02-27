function binarySearch(array, lookingFor) {
  let L = 0; // i called this min in the example
  let R = array.length - 1; // i called this max in my example
  while (L <= R) {
    console.log(`${L} -> ${R}`);
    let m = Math.floor((L + R) / 2); // i called this mid in my example
    if (array[m] < lookingFor) {
      L = m + 1;
    } else if (array[m] > lookingFor) {
      R = m - 1;
    } else {
      return m
    }
  }
  return -1;
}

