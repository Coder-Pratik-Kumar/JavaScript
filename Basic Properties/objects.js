const person={
    firstName: "Pratik",
    LastName:"Sharma",
    age:20
}
let x= person.firstName;
let y=person["LastName"];
let z= x+ " "+y;
// adding new property to the object
person.nationality="Indian";
// deleting the property of the object
delete person.age;

let a = person.nationality;
//creating nested objects
const car={
    name:"ford",
    model:"mustang",
    year: {
        year1:2020,
        year2:2021
    }
}
let b= car.year.year1;
// another way to accessing data in nested objects
let c= car["year"]["year2"];

// methods in an object
const person1={
    name:"pratik Sharma",
    id:2415990027,

    fullName: function(){
        return this.name;
    }
}

// calling the method
let d= person1.fullName();

//Using ToUpperCase() mathod
let e= person1.fullName().toUpperCase();

//using Object.vlaues() method      it is used to return the values of the object in an array

let f=Object.values(person1);

//Object.entries() method    it makes simple way to access the properties of an object without the need of loops

const fruits={
    Bananas:300,
    Apples:200,
    Oranges:100
}
let text=" ";

for(let[fruit,value] of Object.entries(fruits)){
    text+=fruit+":"+value+"<br>";
}
 
//JSON.stringify() method    it is used to convert a JavaScript object into a string

let g= JSON.stringify(person1);
document.getElementById("demo").innerHTML=g;