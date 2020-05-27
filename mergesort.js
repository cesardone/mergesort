function split(wholeArray) {
  const middleValue = Math.ceil(wholeArray.length / 2);

  const firstHalf = wholeArray.slice(0, middleValue);

  const secondHalf = wholeArray.slice(middleValue);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const newArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }

  if (arr2.length) {
    return newArr.concat(arr2);
  }

  if (arr1.length) {
    return newArr.concat(arr1);
  }

  return newArr;
}

function mergeSort(array) {
  if (array.length === 1 || array.length === 0) return array;

  const [leftArr, rightArr] = split(array);

  const left = mergeSort(leftArr);
  const right = mergeSort(rightArr);

  return merge(left, right);
}
