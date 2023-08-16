const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
]


for (i = 0; i < numbers.length; i++) {
  for (k=0; k < numbers[i].length; k++) {
    if(numbers[i][k] % 2 == 0) {
      console.log(numbers[i][k])
    }
  }
}
