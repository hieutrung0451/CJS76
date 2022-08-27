// TODO - In ra số xuất hiện nhiều nhất trong một mảng (ở đây là số 3)
// TODO - In ra số lân xuất hiện của số đó

// ? - Làm thế nào để nhận biết giống nhau
// ? - Làm sao để biết số này xuất hiện nhiều lần hơn số còn lại

// * - Lấy được các giá trị
// * - Lưu giá lặp lại vào một biến

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
