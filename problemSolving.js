const rotateLeft = (arr, d) => {
  for (let i = 0; i < d; i++) {
    let temp = arr.shift();
    arr.push(temp);
  }
  return arr;
};

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
