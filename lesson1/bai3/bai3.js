var arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
var count = 1;
var n = 0;
var number;

for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      n++;
    }

    if (count < n) {
      count = n;
      number = arr[i];
    }
  }
  n = 0;
}

console.log({ value: number, count: count });
