// const arr=[3,4,5,6];
// console.log(arr[0]);
// const app=require("./exam2.js");
// console.log(app.x);
// filter is used to find specific element in Array
// slice
// let result=arr.filter((item)=>{
//     return item==3
// })
//6  fs,buffer
//  const fs= require('fs');
//7 
// http handles the response and request in nodeJS
const http =require('http');
http.createServer((req,res)=>
{
    res.write("<h1>Mohit Mishra</h1>HEllo");
    res.end();
}).listen(4000);
//node package manager npm
// 8 json holds package details .all packages come under json

// dependencies manages the packages
