//problem1 part A
let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat sandwich"],
    weight: 8,
    furcolor: "white"
    },
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    },]
    };
cat.height=10;
cat.weight=5;
cat.name="Fluffyy";
let allActivities=[];
cat.catFriends.forEach(friend=> { allActivities.concat(friend.activities);});
console.log("Activities of Fluffyy's catFriends:",allActivities);
let catFriendsNames=cat.catFriends.map(friend => friend.name);
console.log("catFriends names:",catFriendsNames);
let totalWeight=cat.catFriends.reduce((sum,friend)=>sum+friend.weight,0);
console.log("total weight of catfriends:",totalWeight);
let totalActivities=cat.activities.length+cat.catFriends.reduce((sum,friend)=>sum+friend.activities.length,0);
console.log("total activities of all cats:", totalActivities);
cat.catFriends[0].activities.push("chase mice","climb trees");
cat.catFriends[1].activities.push("sunbathe","play with toys");
cat.catFriends[0].furcolor="brown";
console.log(cat);


//problem1 partB
let myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    },
    ]
};
myCar.accidents.forEach(accident =>{
    console.log("Accident date:",accident.date);
});
console.log(myCar);


//problem2 
let obj={
    name:"RajainiKanth",age:33,haspets:FontFaceSetLoadEvent
};
function printAllValues(obj){
    return Object.values(obj);
}
console.log(printAllValues(obj));


//problem3
function printAllKeys(obj1){
    return Object.keys(obj1);
}
let obj1={
    name:"RajiniKanth",age:25,hasPets:true
};
console.log(printAllKeys(obj1));


//problem4
function convertObjectToList(obj3){
    return Object.entries(obj3);
}
let obj3={
    name:"ISRO", age:35,role:"Scientist"
};
console.log(convertObjectToList(obj3));


//problem5
function transformFirstAndLast(arr) {
    let newObject={};
    newObject[arr[0]]=arr[arr.length-1];
    return newObject;
}
let arr=["HI","I","am","Geek"];
console.log(transformFirstAndLast(arr));


//problem6
function fromListToObject(arr){
    let newObject={};
    arr.forEach(subArray=>{
        newObject[subArray[0]]=subArray[1];
    });
    return newObject;
}
let arr1=[["make","Ford"],["model","Mustang"],["year",1964]];
console.log(fromListToObject(arr1));


//problem7
let arr2= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr2) {
let tranformEmployeeList = [];
arr2.forEach(employeeData=>{
    let employeeObject={};
    employeeData.forEach(data =>{
        employeeObject[data[0]]=data[1];
    });
    tranformEmployeeList.push(employeeObject);
});
return tranformEmployeeList;
}
console.log(transformEmployeeData(arr2));


//problem8
function assertObjectsEqual(actual, expected, testName) {
if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Passed");
    } else {
        console.log('FAILED [${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}');
    }
}
let expected1 = { foo: 5, bar: 6 };
let actual1 = { foo: 5, bar: 6 };
assertObjectsEqual(actual1, expected1, "detects that two objects are equal");
let expected2 = { foo: 6, bar: 5 };
let actual2 = { foo: 5, bar: 6 };
assertObjectsEqual(actual2, expected2, "detects that two objects are equal");


//problem9
let securityQuestions = [
    {
        question: "What was your first pet's name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
];

function chksecurityQuestions(securityQuestions, question, answer) {
    for (let i = 0; i < securityQuestions.length; i++) {
        if (securityQuestions[i].question === question) {
            return securityQuestions[i].expectedAnswer === answer;
        }
    }
    return false;
}
let ques1 = "What was your first pet's name?";
let ans1 = "FlufferNutter";
let status1 = chksecurityQuestions(securityQuestions, ques1, ans1);
console.log(status1); 
let ques2 = "What was your first pet's name?";
let ans2 = "DufferNutter";
let status2 = chksecurityQuestions(securityQuestions, ques2, ans2);
console.log(status2);


//problem10
let students = [
    { name: "Siddharth Abhimanyu", age: 21 },
    { name: "Malar", age: 25 },
    { name: "Maari", age: 18 },
    { name: "Bhallala Deva", age: 17 },
    { name: "Baahubali", age: 16 },
    { name: "AAK chandran", age: 23 },
    { name: "Gabbar Singh", age: 33 },
    { name: "Mogambo", age: 53 },
    { name: "Munnabhai", age: 40 },
    { name: "Sher Khan", age: 20 },
    { name: "Chulbul Pandey", age: 19 },
    { name: "Anthony", age: 28 },
    { name: "Devdas", age: 56 }
];
function returnMinors(arr) {
    return arr.filter(student => student.age < 20);
}
console.log(returnMinors(students));