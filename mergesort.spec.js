describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    const arr = [5, 2, 6, 2, 6, 9, 7];

    const [arr1, arr2] = split(arr);

    expect(arr1).toEqual([5, 2, 6, 2]);
    expect(arr2).toEqual([6, 9, 7]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    const arr = [2, 3, 4, 5, 4, 6, 7, 9];
    //[2, 3, 4, 5] [3, 4, 6, 7]
    //[2, 3, 3, 4, 4, 5, 6, 7]
    const [arr1, arr2] = split(arr);

    expect(merge(arr1, arr2)).toEqual([2, 3, 4, 4, 5, 6, 7, 9]);
  });
});

describe('mergeSort Function', function () {
  it('calls both split and merge functions', function () {
    const arr = [4, 9, 6, 3, 1, 1, 5, 4, 8, 2, 7, 3, 5, 8];

    expect(mergeSort(arr)).toEqual([1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9]);
  });
});
