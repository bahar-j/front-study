function whatShouldICallYou(age, gender, age2, gender2) {

    var cond1 = (gender === "male") && (gender2 === "male");
    var cond2 = (gender === "male") && (gender2 === "female");
    var cond3 = (gender === "female") && (gender2 === "male");
    var cond4 = (gender === "female") && (gender2 === "female");
    
    if (age === age2){
        return '친구';
    } 

    else if ( age < age2 ){
        if ( cond1 ){
            return '형';
        }
        else if ( cond2 ){
            return '누나';
        }
        else if ( cond3 ){
            return '오빠';
        }
        else if ( cond4 ){
            return '언니';
        }
    }

    else {
        if ( cond1 || cond3 ){
            return '남동생';
        }
        else if ( cond2 || cond4 ){
            return '여동생';
        }
    }

}

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);