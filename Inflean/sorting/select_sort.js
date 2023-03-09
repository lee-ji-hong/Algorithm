function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(array[i], array[j])
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]

function test(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min_index = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min_index] > arr[j]) {
          min_index = j;
        }
      }

      let temp = arr[min_index];
      arr[min_index] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  const arr = ['개구리', '거위', '말', '북극곰', '얼룩말', '고릴라', '기린', '닭', '코끼리'];
  console.log(test(arr));
  //['개구리', '거위', '고릴라', '기린', '닭', '말', '북극곰', '얼룩말', '코끼리']