"use strict"
function show(func,screen){
  document.querySelector(`.${screen}`).innerHTML = func();
}


function isPrime(num){
    let notPrimes = [];
    for (let i=1; i<=Math.sqrt(num); ++i){
        if(num % i === 0){
       notPrimes.push(i);
        };
    };
    notPrimes.shift();
    if (notPrimes.length === 0 && num > 1 && extractDecimal(num)==0){
        return true;
    } else {
        return false;
    };
}



function solveQuadraticCongruence(){
  let a = document.querySelector("#a").value;
  let b = document.querySelector("#b").value;
  let c = document.querySelector("#c").value;
  let p = document.querySelector("#p").value;
    a=+a;b=+b;c=+c;p=+p;
    if(!isPrime(p))return `invalid modulo:  modulo must be a prime number`;
    if(!(a%p))return `invalid a: a must be indivisible by p`;
    let discriminant = (b**2 - 4*a*c)%p;
    if(discriminant < 0)discriminant = p + discriminant;
    let y = [];
    for(let i=0; i < p; ++i){
       if((i**2)%p === discriminant)y.push(i);
    }
    if(y.length == 0){
        return "No solution";
    }
    let soln = [];
    let d = [];
    for(let item of y){
        let n = (item - b)%p;
        if(n < 0)n= p+n;
        d.push(n);
    }
          let index;
        for(let i =1; i < p; ++i){
            if((2*a*i)%p == 1){
                index = i;
                break;
            }
        }
    if(index === undefined){
        return "No solution"
    }
     for(let item of d){
         soln.push((item*index)%p)
     }
    
    return soln.join(",");
}
 

document.querySelector(".solveQC").addEventListener("click",(e)=>{
  show(solveQuadraticCongruence,"displayQC")
});




function solveSimultaneousEquationInTwoVariables(){
  let a1 = document.querySelector("#a1").value;
  let a2 = document.querySelector("#a2").value;
  let b1 = document.querySelector("#b1").value;
  let b2 = document.querySelector("#b2").value;
  let c1 = document.querySelector("#c1").value;
  let c2 = document.querySelector("#c2").value;
  a1=+a1;a2=+a2;b1=+b1;b2=+b2;c1=+c1;c2=+c2;
  let determinant = a1*b2 - a2*b1;
  
  if(determinant === 0)return "No solution";
  let x = (b2*c1 - b1*c2)/determinant;
  
  let y = (a1*c2 - a2*c1)/determinant;
  
 // let solution = [x,y];

  return `x=${x}<br>y=${y}`;
}
 
document.querySelector(".solveSLE2").addEventListener("click",(e)=>{
  show(solveSimultaneousEquationInTwoVariables,"displaySLE2");
});



function solveSimultaneousEquationInThreeVariables(){
  let a1 = document.querySelector("#A1").value;
  let a2 = document.querySelector("#A2").value;
  let a3 = document.querySelector("#A3").value;
  let b1 = document.querySelector("#B1").value;
  let b2 = document.querySelector("#B2").value;
  let b3 = document.querySelector("#B3").value;
  let c1 = document.querySelector("#C1").value;
  let c2 = document.querySelector("#C2").value;
  let c3 = document.querySelector("#C3").value;
  let d1 = document.querySelector("#D1").value;
  let d2 = document.querySelector("#D2").value;
  let d3 = document.querySelector("#D3").value;
  a1=+a1;a2=+a2;a3=+a3;b1=+b1;b2=+b2;b3=+b3;c1=+c1;c2=+c2;c3=+c3;d1=+d1;d2=+d2;d3=+d3;
  let determinant = (a1*b2*c3 + c1*a2*b3 + b1*a3*c2) - (a1*b3*c2 + b1*a2*c3 + c1*a3*b2);
  if(determinant === 0)return "No solution";
  let x = ((d1*b2*c3 + c1*d2*b3 + b1*d3*c2)-(d1*b3*c2 + b1*d2*c3 + c1*d3*b2))/determinant;
  let y = ((a1*d2*c3 + c1*a2*d3 + d1*a3*c2)-(a1*d3*c2 + d1*a2*c3 + c1*a3*d2))/determinant;
  let z = ((a1*b2*d3 + d1*a2*b3 + b1*a3*d2)-(a1*b3*d2 + b1*a2*d3 + d1*a3*b2))/determinant;
  return `x=${x}<br>y=${y}<br>z=${z}`
  
}


document.querySelector(".solveSLE3").addEventListener("click",(e)=>{
  show(solveSimultaneousEquationInThreeVariables,"displaySLE3");
});



function primalityTest(){
  let num = document.querySelector("#num").value;
   num=+num;
  if(isPrime(num)){
    return `${num} is prime `;
  }else {
    return `${num} is not a prime`;
  }
}
document.querySelector(".check").addEventListener("click",(e)=>{
  show(primalityTest,"displayPT");
});



function primeGenerator(){
  let upperbound = document.querySelector("#upperbound").value;
  upperbound = +upperbound;
  let primes = [];
  for(let i =1; i<=upperbound; ++i){
    if(isPrime(i)){
      primes.push(i);
    };
  };
  return  `<p>${primes.join(",")}</p>`;
  
}
document.querySelector(".generate").addEventListener("click",(e)=>{
  show(primeGenerator,"displayPG");
});




function extractDecimal(num){
     let str = num.toString().split(".")[1]??"0";
     let strLength = str.length + 2;
     return parseFloat(str.padStart(strLength,"0."));
 }
 
 
let sequence = new Map();
 function nthfib(n){
  if(n <=2){
   return 1;
  }else if(sequence.has(n)){
   return sequence.get(n);
 }else {
  return sequence.set(n,nthfib(n-1)+nthfib(n-2)).get(n);
  }
 
}


 function fibonacciSequence(){
   let length = document.querySelector("#term").value;
    length = +length;
    if(length <= 0 || extractDecimal(length) !== 0)return "Invalid length";
   let base =[1,1];
   if (length ==1)return 1;
   if(length == 2) return base.join(",");
   nthfib(length);
   let result = base.concat(Array.from(sequence.values())).join(",");
   sequence.clear();
   return result;
 }
document.querySelector(".generateFb").addEventListener("click",(e)=>{
  show(fibonacciSequence,"displayFIB");
});
 
function gcd(...array){
  if(!array.every((item)=>Number.isInteger(item)))return`Unexpected value`;
  let nums = array.map((num)=>num<0?-num:num )
  function gcdOfFirstTwo(a,b){
    let nums= [a,b];
    nums.sort((a,b)=>a-b);
    if(+nums[0]=== 0){
      return nums[1];
    }else if(nums[1]%nums[0] == 0){
      return nums[0]
    }else{
    let rem = nums[1]%nums[0];
     return gcdOfFirstTwo(+nums[0],rem);
    }
  }
  nums.sort((a,b)=>a-b);
  if(nums.length == 1){
    return nums[0]
  }else if(nums.length == 2){
    return gcdOfFirstTwo(nums[0],nums[1]);
  }else {
    let gd = gcdOfFirstTwo(nums[0],nums[1]);
    nums.splice(0,2);
    return gcd(gd,...nums);
    
  }
}


function greatestCommonDivisor(){
  let collection = document.querySelector("#terms").value;
  let values = [];
  let num = collection.split(",");
  for(let value of num){
    values.push(+value);
  }
  try{
    if(!values.every(value=>isFinite(value))){
      throw new Error("Unexpected value");
    };
  }catch(err){
    return err.message;
  };
  return gcd(...values);
}
document.querySelector(".find-gcd").addEventListener("click",(evt)=>{
        show(greatestCommonDivisor,"displayGCD");
});
