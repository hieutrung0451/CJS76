const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
let count = 1;
let n = 0;
let number;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
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
