//task1 solution
let num=10;
function addFive(num){
    return num+5;
}
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));


//task2 solution
let num1= 5;
function getOpposite(num1) 
{
if (typeof num1 === 'number')
 { 
    return -num1; 
 } 
else 
 { 
    return -1; 
 }
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));


//task3 solution
let min = 5;
function toSeconds(min) {
    return min*60;
}
console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));


//task4 solution
let mystr = "5";
function toInteger(mystr) 
{
if(typeof mystr==="String")
 {
    return mystr;
 }
}
console.log("6");
console.log("1000");
console.log("12");


//task5 solution
let myint = 0;
function nextNumber(myint) 
{
return myint+1;
}
console.log(nextNumber(0));
console.log(nextNumber(9));
console.log(nextNumber(-3));


//task6 solution
let arr = [1, 2, 3];
function getFirstElement(arr) 
{
  return arr[0];
}
let data= getFirstElement(arr)
console.log(data);
console.log(getFirstElement([80,5,100]));
console.log(getFirstElement([-500,0,50]));


//task7 solution
let arr1 = [1, 2, 3];
let arr2=[2];
let arr3=[10];
let arr4=[24];
function hourToSeconds(arr) 
{
for(let i=0;i<arr.length;i++)
 return arr[i]*3600
}
let data1=hourToSeconds(arr1)
let data2=hourToSeconds(arr2)
let data3=hourToSeconds(arr3)
let data4=hourToSeconds(arr4)
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);

//or task7 solution
function hourToSeconds1(arr7) 
{
let result=[];
for(let i=0; i<arr7.length; i++){
 result.push( arr7[i]*3600 );
}
return result;
}
let arr7=[1,2,10,24];
let data5=hourToSeconds1(arr7);
console.log(data5);


//task8 solution
function findPerimeter(num1,num2) 
{
    return 2*(num1+num2);
}
let peri = findPerimeter(6,7)
console.log(peri);
console.log(findPerimeter(20,10));
console.log(findPerimeter(2,9));


//task9 solution
function lessThan100(num1,num2)
{
    let sum=num1+num2
    return sum<100
}
let res=lessThan100(22,15)
console.log(res);
console.log(lessThan100(83,34));
    

//task10 solution
function remainder(num1,num2) 
{
    return num1%num2
}
let res1=remainder(1,3)
console.log(res1);
console.log(remainder(3,4));
console.log(remainder(-9,45));


//task11 solution
function countAnimals(tur,horse,pigs)
{
    return (tur*2)+(horse*4)+(pigs*4);
}
let legs=countAnimals(2,3,5)
console.log(legs);
console.log(countAnimals(1,2,3));
console.log(countAnimals(5,2,8));


//task12 solution
function frames(num3,num4)
{
   return num3*60*num4;
}
let fps=frames(1,2)
console.log(fps);
console.log(frames(1,1));
console.log(frames(10,1));
console.log(frames(10,25));


//task13 solution
function divisiblebyfive(num5)
{
    return num5 % 5 == 0;
}
let divisible=divisiblebyfive(5)
console.log(divisible);
console.log(divisiblebyfive(-55));
console.log(divisiblebyfive(37));


//task14 solution
function isEven(num0)
{
    if(typeof num0 !== 'number')
        {
            return -1;
        }        
    return num0 % 2 ==0;
}
let even=isEven(5)
console.log(even);
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));


//task15 solution
function arebothOdd(num6,num7)
{
    return num6 % 2!==0 && num7 % 2!==0;
}
console.log(arebothOdd(1,3));
console.log(arebothOdd(1,4));
console.log(arebothOdd(2,3));
console.log(arebothOdd(0,0));


//task16 solution
function getfullname(firstname,lastname)
{
    if(!firstname && !lastname){
        return "";
    }else if(!firstname){
        return lastname;
    }else if(!lastname){
        return firstname;
    }else{
        return firstname +" "+ lastname;
    }
}
console.log(getfullname("GUVI","GEEK"));
console.log(getfullname("GUVI"));
console.log(getfullname(undefined,"GEEK"));
console.log(getfullname("''","''"));


//task17 solution
function getlengthofword(word)
{
    if(typeof word !== 'string'){
        return -1;
    }
    return word.length;
}
console.log(getlengthofword("GUVI"));
console.log(getlengthofword(""));
console.log(getlengthofword());
console.log(getlengthofword(9));


//task18 solution
function isSameLength(word1,word2)
{
    return word1.length==word2.length;
}
console.log(isSameLength("GUVI","GEEK"));


//task19 solution
function getDistance(x1, y1, x2, y2)
{
    const distance=Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    return distance;
}
console.log(getDistance(100,100,400,300));


//task20 solution
function getNthElement(array,n)
{
    if(array.length ===0 || n<0 || n>=array.length){
        return undefined;
    }
    return array[n];
}
console.log(getNthElement([1,3,5],1));


//task21 solution
function getLastElement(array)
{
    if(array.length ===0){
        return -1;
    }
    return array[array.length-1];
}
console.log(getLastElement([1,2,3,4]));


//task22 solution
let obj={
    mykey:"value"
};
function getProperty(obj,key)
{
 return obj[key];   
}
console.log(getProperty(obj,'mykey'));
console.log(getProperty(obj,'dummykey'));


//task23 solution
function addProperty(obj1,key1)
{
    obj1[key1]=true;
}
let obj2={};
addProperty(obj2,"mykey");
console.log(obj2);
let obj3={
    mykey:"value"
};
addProperty(obj3,"newkey");
console.log(obj3);


//task24 solution
function removeProperty(obj,key){
    delete obj[key];
}
let obj4={
name:"alice",
age: 30
};
console.log(removeProperty(obj4,"name"));


//task25 solution
let arr8=[-5,10,-3,12,-9,5,90,0,1];
let ar22=function countPositivesSumNegatives(arr8)
{
    let positiveCount=0;
    let negativeSum=0;
    for (let num of arr8)
    {
        if(num>0){
            positiveCount++;
        }else if(num<0){
            negativeSum+=num;
        }
    }
    return [positiveCount,negativeSum];
}
console.log(ar22(arr8));


//task26 solution
function getPositives(ar)
{
    return ar.filter(num=>num>0);
}
let ar=[-5,10,-3,12,-9,5,90,0,1];
let ar222=getPositives(ar);
console.log(ar222);


//task27 solution
function powersofTwo(n)
{
    const res=[];
    for(let i=0;i<=n;i++){
        res.push(2**i);
    }
    return res;
}
console.log(powersofTwo(0));
console.log(powersofTwo(1));
console.log(powersofTwo(2));


//task28 solution
function findMax(ar)
{
    let max=ar[0];
    for(let i=1;i<ar.length;i++){
        if(ar[i]>max){
            max=ar[i];
        }
    }
    return max;
}
let ar1=[-5,10,-3,12,-9,5,90,0,1];
let max=findMax(ar1);
console.log("max:",max);


//task30 solution
function getPrimes(nPrimes, startAt)
{
    let primes=[];
    let i=startAt+1;
    while(primes.length<nPrimes){
        if(isPrime(i)){
            primes.push(i);
        }
        i++;
    }
    return primes;
}
function isPrime(num){
    if(num<=1)
        return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i ===0)
            return false;
    }
    return true;
}
console.log(getPrimes(10,100));


//task31 solution
function reverseStrings(s){
    return s.split('').reverse().join('');
}
let s= reverseStrings("JavaScript");
console.log(s);


//task32 solution
function mergeArrays(ar11,ar2){
    let result=[];
    for(let el of ar11){
        result.push(el);
    }
    for(let el of ar2){
        result.push(el);
    }
    return result;
}
let ar11=[1,2,3];
let ar2=[4,5,6];
let ar3=mergeArrays(ar11,ar2);
console.log(ar3);


//task33 solution
function sumCSV(s){
    return s.split(',').reduce((acc,num)=>acc+parseFloat(num.trim()),0);
}
console.log(sumCSV("1.5,2.3,3.1,4,5.5,6,7,8,9,10.9"));