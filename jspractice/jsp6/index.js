function multi(num1){
    for(let i=1;i<=10;i++){
        let result=num1*i;
        console.log(`${num1} * ${i}=${result}`);
    }

}
multi(3);


//takes string and take vowel
function stringss(str){
    const vowel=["a","e","i","o","u"];
    let count=0;
    for(let i=0;i<str.length;i++){
        if(vowel.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
} 
console.log(stringss("siddhesh")); 