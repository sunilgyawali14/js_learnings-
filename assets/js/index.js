// console.error("lol this is the error here ");
// console.log("this is a sucess message");

// document.write("this message is from document");

// console.log("<h1>this is new heading</h1>");
// document.write("<h1> this is a new headig");

// alert("this is a popup box");
// confirm("this is a updated pop up box");

// input method

//   console.log ( parseInt (prompt("enter a name")) + parseInt( prompt("enter a name")))
  
//   console.log ( parseFloat (prompt("enter a number")) + parseFloat( prompt("enter a number")))
// console.log (prompt("the text is","sunil"));

function newFun(a,b)
{
console.log("did the fun work");
let c=a+b;
console.log(c);
}
let x=5;
let y=4;                                                                                               
newFun(x,y);
newFun(10,34);
newFun("hero","zero");

let suf=22;
function anotherFun(){
    let guf=23;
    let hawa=guf+suf;
    console.log(hawa)
}
anotherFun();

// const funName=(x)=>
// {
// console.log(x);
// }
// let hello=("sunil")
// funName(hello);

const funName=(a,b)=> //arrow function
    {
        console.log("function");
        let x=a+b;
    console.log(x);
    }
    funName(3,4);

    const insideFunction=(param1,param2)=>{
        funName(param1,param2);

    }
    insideFunction(14,14);

    setTimeout(()=>{
        console.log("print after some delay:");

    },3000)
    const interval= setInterval(()=>{
        let time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        document.getElementById("clock").
            innerHTML = `${hour}:${minute}:${second}`
    },1000)
    