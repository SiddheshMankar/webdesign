const countval=document.querySelector('#counter'); 
const increment=()=>{
    let value=parseInt(countval.innerText);
    value=value+1;
    countval.innerText=value;
}
const decrement=()=>{
    let value=parseInt(countval.innerText);
    value=value-1;
    countval.innerText=value;
    
}