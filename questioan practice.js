// 1. //check a string is palindrome or not

// var string=prompt("enter the string")
// var length=string.length
// console.log(length)
// var msg="It is palindrome"
// for(var i=0;i<=length/2;i++){
//     if(string[i]!==string[length-1-i]){
//         var msg="It is not palindrome"
//     }
// }
// console.log(`${string}:${msg}`)



// 2.add a two number dynamically

// let num1=prompt("enter to num1 value")
// let num2=prompt("enter to num2 value")
// let result=parseInt(num1)+parseInt(num2)
// console.log(result)

// 3.find a square root of a Number
  
// let num=prompt("enter a number")
// let sqrtnum=Math.sqrt(num)
// console.log(sqrtnum)


// 4. find area of triangle
  
// let height=prompt("enter the height value")
// let base=prompt("enter the height value")
// let area=(height*base)/2
// console.log("height:"+base+"base:"+base+"area:"+area)

//    2nd method

// let a=10
// let b=20
// let c=30
// let s=(a*b)/2;
// let temp=s*(s-a)*(s-b)*(s-c)
// let area=Math.sqrt(temp)
// console.log(area)


// 5. swapping a value using tem variable
  
// let a=5;
// let b=10;
// let temp;
// console.log(`the value a is${a},the value of b is ${b}`)
// temp=a
// a=b
// b=temp
// console.log(` after swapping the value a is${a},the value of b is ${b}`)
// temp=a

    // 2nd way of swapping a value without using the temp variable
     
    // let a=5;
    //  let b=7;
    // a=a+b;
    // b=a-b;
    // a=a-b;
    //  console.log("the value of a is:",a,"the value of b is:",b)

//    3.convert km into miles 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script>
//         function convert(){
//             var kms=document.getElementById("data").value;
//             const factor=0.621371;
//             var miles=kms*factor;
//             document.getElementById("res").innerText=`${miles} miles`;
//         }
//     </script>

// </head>
// <body>
//     <input text="number"name="" id="data"/>kms
//     <button onclick="convert()">convert</button>miles
//     <h1 id="res"></h1>
    
// </body>
// </html>
  
// 7. convet faharenhiet to celius

// !DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <script>
//     function  convert(){
//         var c=document.getElementById("data").value;
//         let f=c*1.8+32
//         // console.log(f)
//        document.getElementById("res").innerText=`${f}fahrenheit`
//     }
// </script>
// <body>
//    <input type="number" name="" id ="data"/>C
//    <button onclick="convert()">convert</button>
//    <h1 id="res"></h1>

// </body>
// </html>

// 8.check a number is positive negative or zero

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script>
//         function check(){
//         let value=document.getElementById("data").value
//         let res=Math.sign(value)
//         document.getElementById("res").innerText=res;
//         }
        
//     </script>
// </head>
// <body>
//     <input type="" name="" id="data"/>
//     <button onclick="check()">check</button>
//     <h1 id="res"></h1>
    
// </body>
// </html>


// print the table of 5
// let num=5;
// for(i=0;i<=10;i++){
//     console.log(`5 * ${i}=${num*i}`)
// }

// find the lagest value  in the program
   
// let a=prompt("enter the first number")
// let b=prompt("enter the second number")
// let c=prompt("enter the third number")
// let x=Math.max(a,b,c)
// console.log(`${a},${b},${c}:Largest value is ${x}`)

//  find the factorial  of a given number

// let num=prompt("please enter the number")
// let fact=1;
// if(num==0){
//     console.log(`The factorial of ${num} is 1`)
// }else if(num<0){
//     console.log("The factorial of negative number is not possible")
// }else{
//     for(i=1;i<=num;i++){
//         fact=fact*i
        
//     }
//     console.log(`The factorial of ${num} is ${fact}`)
    
// }

// 14. find the factorial using reccursion

// let num=prompt("please enter the number")
// let fact=1
// function factr(n){
// if(n>num){
//    return;
// }
// var tmp=fact;
// fact=fact*n;
// console.log(tmp+"x"+n+"="+fact)
// n++;
// factr(n);
// }
// factr(1);
// console.log(tmp+"x"+n+"="+fact)

// 15. print table using function
// let a =prompt("enter the number")
// function tableof(a){
// for(i=1;i<=a;i++){
//     res= `${a}X${i}=${a*i}`
//     console.log(res)
// }
// }tableof(5)

// 16. make a calculator using switch case statment
//  let num1=prompt("please enter num1")
//  let num2=prompt("please enter num2")
//  let opr=prompt("select operator among the +,-,*,/")
//  switch(opr)
//  {
//     case "+":
//         res=num1+num2
//         console.log(`${num1} + ${num2}=${parseInt(num1)+parseInt(num2)}`)
//         break;
//         case "-":
//             res=num1+num2
//             console.log(`${num1} - ${num2}=${(num1)-(num2)}`)
//             break; 
//             default:
//                 console.log("invalid operator")  

//  }

// check a number is last digit same or not
//   let a=prompt("enter a 1st number")
//   let b=prompt("enter the 2nd number")
//   let c = prompt("enter the second number")
//   let res1=a%10
//   let res2=b%10
//   let res3=c%10
//   if(res1===res2&res1==res3){
//     console.log(`${a},${b},${c} having the last digit is same`)
//   }else{
//     console.log(`${a},${b},${c} having the last digit is not same`)
//   }

// 15. print a number in fibonccai series

//   let a = 0;
//   let b=1;
//   console.log(a)
//   console.log(b)
//   for(i=0;i<=10;i++){
//     let temp=a+b
//     console.log(temp)
//     a=b;
//     b=temp
//   }


// using while loop


// let a = 0;
// let b=1;
// let i=0
// console.log(a)
// console.log(b)
// while(i<=10){
//   let temp=a+b
//   console.log(temp)
//   i++
//   a=b;
//   b=temp
// }


// 16. find the sum of natural number using resurssion

// let num =prompt("please enter the number")
// function sum(num){
//    if(num>0){
//     return num+sum(num-1)
//    } else{
//     return num;
//    }
// }
// let res=sum(10)
//  console.log(res)


// 17.program to sort word in alphabatical order


// let string ="my name is ankit prajapati"
// let stringArray=string.split(' ').sort()
// console.log(stringArray)

// 2nd

// let char="a,c,d,g,h,k,r";
// let sortArray=char.split('  ').sort()
// let check= typeof(sortArray)
// console.log(check)
// console.log(sortArray)

// 18. program to replace a character of a string

// let string="css series is the best series of thapa technical"
// console.log(string)
// let exp= new RegExp('css','gi')
// let replace=string.replace(exp,'javascript')
// console.log(replace)

// 19.reverse a string using for loop

// let string="Ankit"
// let len=string.length
// let revr=''
// for(i=len-1;i>=0;i--){
//     revr+=string[i]
//     // console.log(rev)
// }
// console.log(`${string} the reverse is ${revr}`)


// check  string is palindrome or not


//   let string="level";
//   let len=string.length
//   var msg="is palindrome"
  
// //   console.log(div)
//   for(i=0;i<=len/2;i++){
//     if(string[i]!==string[len-1-i]) {
//      var msg="is not palindrome"
//     }
// }
// console.log(`${string}:${msg}`)

//  program to capitalize the first character of the string 
    
// let string= "ankit"
// let index=string.charAt(0)
// console.log(index)
// let cap=index.toUpperCase() 
// console.log(cap)
// let rem=string.slice(1)
// console.log(rem)
// let final=cap+rem;
// console.log(final)


// check a number of occurence of character in a string

// let string =prompt("enter a string")
// let occlett=prompt("enter a letter to check");
// let len= string.length
// let counter=0;
// for(i=0;i<len;i++){
//     // console.log(string[i])
//     if(string[i]==occlett){
//        counter++
//     }
//     // console.log(`${string}:${occlett}:${counter}`)
// }console.log(`${string}:${occlett}:${counter}`)

// 27.  count the number of vowel in a string

// let string="ankit"
// let reg=/[a,i,o,u]/gi;
// let check=string.match(reg)
// console.log(check)
// console.log(check.length)


// write a function call check triangle check the triagle is equiletral,isosceles or   scalene
// const checktriangle=(a,b,c)=>{
// if(a===b&b===c){
//     return "equiletral"
// }else if(a===b ||b===c||a===c){
//     return "isosceles"
// }else{
//     return "scalene"
// }

// }
// console.log(checktriangle(3,3,3));
// console.log(checktriangle(3,3,3));
// console.log(checktriangle(3,4,5));

// sort an array without using the built-in method 

// const sortAscending=(array)=>{
//   return  array.sort((a,b)=>b-a) 
// }
// console.log(sortAscending([5,4,7,2,1]))

// const isplaindrome=(str)=>{
//     str=str.toLowerCase()
//     let r_rev=str.split("").reverse().join("")
//     console.log(r_rev)
//     return str===r_rev ? true:
//     false
// }
// console.log(isplaindrome("level"))


// write a function findmax that takes an array of number as input and return the maximum number in the array

// let findMax=(arr)=>{
//     return Math.max(...arr)
// }
// console.log(findMax([1,5,3,4,2]))

// 


// write a function arrayareEqual that takes two arrays arr1 and arr2
 //as an input and return true if the arrays are equal
 // (i.e contain the same element in the same order).and false otherwise.

// const arrayareEqual=(arr1,arr2)=>{
//    if(arr1.length!=arr2.length){
//     return false
//    }
//    return arr1.every((currvalue,index)=>currvalue==arr2[index])
// }
// console.log(arrayareEqual([1,2,4],[1,2,4]))


const sumofDigit=(num)=>{
  let array=Array.from(String(num))
  console.log(array)
}
sumofDigit(1234)