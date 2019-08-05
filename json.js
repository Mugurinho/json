//declared variables for Todd outside the object
var fn = "Tod";
var ln = "Grover";
var gender = "male";
var salary = 50000;

$(document).ready(function () {
    //Nested JSON object Todd and Sara
    var employeesJSON = {
        "Todd": {
            "firstName": fn,
            "lastName": ln,
            "gender": gender,
            "salary": salary 
        },
        "Sara": {
            "firstName": "Sarah",
            "lastName": "Baker",
            "gender": "Female",
            "salary": 70000
        }
    };


// Accessing data from a JSON object
var result = "Name: " + employeesJSON.Todd.firstName + " " + employeesJSON.Todd.lastName +  "<br>Gender: " + employeesJSON.Todd.gender + "<br>Salary: " + employeesJSON.Todd.salary + "<hr>";
var result2 = "Name: " + employeesJSON.Sara.firstName + " " + employeesJSON.Sara.lastName +  "<br>Gender: " + employeesJSON.Sara.gender + "<br>Salary: " + employeesJSON.Sara.salary;

$('#resultDiv').html(result);
$('#resultDiv2').html(result2);



//Simple hardcoded JSON object
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = "<hr>Name: " + myObj.name + "<br>Age: " + myObj.age + "<br>City: " + myObj.city + "<hr>";


//new JSON object with for loop
var myObj2, x;
myObj2 = {"name":"Oana", "age":30, "car":"Opel"};
for (x in myObj2) {
document.getElementById("demo2").innerHTML += myObj2[x] + "<br>";
}



//users object from user.json as string, using parse to convert to string. 
var users = `[
    {
        "firstName": "Sarah",
        "lastName": "Baker",
        "gender": "Female",
        "salary": 70000,
        "bonus": 2100
    },
    {
        "firstName": "Mike",
        "lastName": "Peter",
        "gender": "Male",
        "salary": 45400,
        "bonus": null
    }
]`

//console log
console.log(JSON.parse(users)[0].firstName);

//html display
var usersString = JSON.parse(users);
document.getElementById("demo3").innerHTML = usersString[1].firstName + " " + usersString[1].lastName;


//different object 
var person = {
    name: "Mugur",
    age: 10,
    address:{
        street: "Elves",
        city: "Boston"
    },
    hobbies:["football", "tennis"]
}

console.log(person.address.street);




//array of objects
var people = [
    {
        name: "Donald",
        age: 20, 
    }, 
    {
        name: "Jamie",
        age: 30, 
    }, 
    {
        name: "Bill",
        age: 40, 
    }, 
    {
        name: "Kia",
        age: 50 
    }
];

var output = '';
//loop through the array of objects
for(var i = 0; i < people.length; i++){
    //console.log(people[i]);
    output += '<li>' + people[i].name + '</li>'
}
document.getElementById("people").innerHTML = output;




});



