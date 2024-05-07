// print duplicate and unique numbers
// const input=require("prompt-sync")();
// num = input("enter a number:")
// s="";
// dup=""; uni="";
// for(i of num){
//     if(!s.includes(i)){
//       s=s+i
//     }
// }

// for(i of s){
//   c=0;
//   for(j of num){
//     if(i==j)
//     c++
//   }
//   if(c>1){
//  dup=dup+i+""
//   }
//   else{
//     uni=uni+i+""
//   }
// }
// console.log( "duplicate numbers are:",+dup)
// console.log("unique numbers are:",+uni)

// count the repeat digits in the given number
// const input=require("prompt-sync")();
// num = input("enter a number:")
// s=""; count=0;
// for(i of num){
//    if(!s.includes(i)){
//     s=s+i;
//   }
// }
// for(i of s){
//   c=0;
//   for(j of num){
//   if(i==j){
//     c++
//   }
//   }
//   if(c>1)
//     count++;
// }
  
// console.log(count)

// Write a program to print the sum of smallest unique no and smallest duplicate number.

// input: 351886761
// output: 1+3 = 4
// const input=require("prompt-sync")();
// num = input("enter a number:")
// s="";
// dup="";
//  uni="";
// for(i of num){
//     if(!s.includes(i)){
//       s=s+i
//     }
// }
// for(i of s){
//   c=0;
//   for(j of num){
//     if(i==j){
//       c++
//     }
// }
// if(c>1){
//   dup=dup+i
// }
// else{
//   uni=uni+i
// }
// }
// min=dup[0]
// for(i of dup){
//   if(i<min)
//     min=i
// }
// min1=uni[0]
// for(i of uni){
//   if(i<min1){
//     max=i
//   }
// }
// console.log(Number(min)+Number(min1))
 




// 2) Write a program to print the sum of largest duplicate and largest unique number.
// input: 2237748
// output: 7+8 = 15
// const input=require("prompt-sync")();
// num = input("enter a number:")
// s="";
// dup="";
//  uni="";
// for(i of num){
//     if(!s.includes(i)){
//       s=s+i
//     }
// }
// for(i of s){
//   c=0;
//   for(j of num){
//     if(i==j){
//       c++
//     }
// }
// if(c>1){
//   dup=dup+i
// }
// else{
//   uni=uni+i
// }
// }
// max=dup[0]
// for(i of dup){
//   if(i>max)
//     max=i
// }
// max1=uni[0]
// for(i of uni){
//   if(i>max1){
//     max1=i
//   }
// }
// console.log(Number(max)+Number(max1))