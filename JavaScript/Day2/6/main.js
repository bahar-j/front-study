function getSecondBiggestNumber(arr) {
    // 코드를 작성하세요.
    arr.sort(function(a, b){
      return b - a;
    })
    
    return arr[1]
}

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));
