function filter(arr, func) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let arrKey = arr[i];

    if (func(arrKey)) {
      newArr.push(arrKey);
    }
  }

  return newArr;
}

function inBetween(start, end) {
  return function (a) {
    return a >= start && a <= end;
  }
}

function inArray(array) {
  return function (a) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === a) {
        return true;
      }
    }
    return false;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

/*console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6*/
// console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2
