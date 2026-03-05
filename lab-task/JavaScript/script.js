let a = 10;
let b = 2;
a = a+b;
b = a-b;
a = a-b;

console.log(`a = ${a} b = ${b}`);

function square(n)
{
     console.log(`Shows for ${n}`);

}

for (i=1; i<10 ; i++)
{
    console.log(square(i));
}

let x=[1 , 7, 9, 3];
let y = null;
 for(i=0; i<4 ; i++){
    if(x[i]>y){
        y = x[i];
    }
   

 }
 console.log(`largest number ${y}`);