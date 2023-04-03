
function ispositive(num1){
    if(num1>0){
        return console.log(`${num1} is positve`);
    }
    else if (num1==0) {
        return console.log(`${num1} is zero`);
  
        
    }
    else{
       return console.log(`${num1} is negative`)
    }
}
console.log(ispositive(-10));
console.log(ispositive(0));
console.log(ispositive(1));
console.log(ispositive(11));
console.log(ispositive(-0));
console.log(ispositive(22));
