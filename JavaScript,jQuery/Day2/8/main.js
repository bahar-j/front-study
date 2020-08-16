function range(start, end, step) {
    var arr = [];

    if ( end < 0 ){
        for(var i = start; i > end; i += step){
            arr.push(i);
        }
        return arr;
    }

    for(var i = start; i < end; i += step){
        arr.push(i);
    }
    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));