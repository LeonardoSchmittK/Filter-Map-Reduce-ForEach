
const sum = (...values) =>{
    return values.reduce((a,b)=>a+b,0);
};

console.log(sum(10,Math.pow(2,2),55));