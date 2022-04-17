// setTimeout(function(){
//     console.log("Hello Wrold");
// // },2000);

// // function x(y) {
// //     console.log("x");
// //     y();
// // }

// // x(function y(){
// //     console.log("y");
// // })


// function add(cb){
//             setTimeout(() => {
//                 console.log("I am setTimeout2")
//                 cb()
//             }, 1000)

// }

// function sum(callback) {
//         setTimeout(() => {
//             console.log("I am setTimeout")
//             callback()
//         }, 3000);

// }

// function sum1() {
// console.log("sdfghjkl")

// }
// sum(()=>{
//     add(()=>{
//         sum1()
//     })
// })


// async function addition(){
//        const res = await add()
//        console.log(res1);
//        const res1 = await sum()
//        console.log(res);
//    }
// addition()
// console.log(addition());


let arr = [
    {name:"tutun",marks:20},
    {name:"babun",marks:20},
    {name:"rohan",marks:18}

]

let num = arr.reduce((acc,elm)=>{
    return acc+elm.marks
},0)
console.log(num)

// let num = 1;
// let num1 = num > 5 ? true : false;

// console.log(num1);

// function add(a) {
//     return function (b) {
//         return b ? add(a + b) : a
//     }
// }

// console.log(add(2)(2)(8)(10)());

// let a = 10;
// let b = 15;
// let c = 20;
// [a,b,c]=[b,c,a]

// console.log(a,b,c);


// function add(p){
//     let sum = 0;
//     for(let i=0;i<=p;i++){
//         sum=sum+i
//     //    sum+=i;
//     }
//     return sum;
// }
// console.log(add(5));


// var abc = "12          54               64 87"
// var a = abc.split(" ").join('')
// console.log(a)

// let date = "14-04-2022";
// let date1 = date.split("-")

// date1.join('-')

// console.log(date1);

