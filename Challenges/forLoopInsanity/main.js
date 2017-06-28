// RULES:
// loops must be encapsulated in a function
// Array can not be hard coded (pass the array to the function)
// When challenge is passed, comment or delete just the function call (dont clutter your console)
//console.log('hello');


// challenge One
// loop through the names array, and print names that being with the letter 'A'
// bonus: Allow your function to accept the Letter, as a parameter

//challenge 1 completed with bonus

var names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];
var string= 'A'
function searchArray(string){
  names.forEach(function(name){
    //name here assumes its the name you want to look at, not the
    // whole array so a [0][0] to find postition in the array isn't
    // needed. the [0]after name is just looking at the first letter
    // and you dont even need an else statement because you dont care
    // about the rest
    if(name[0] === 'A'){
      //console.log(name);
    };
  });
};
//when calling this function you dont need to console.log it. just
//call it directly like below.
searchArray(names);



//challenge 2 completed (not bonus?.)

// challenge Two
// loop through the numbers array, and print numbers greater than 10
// bonus: Allow your function to accept the comparison Number, as a parameter
var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99];
for(var i = 0; i<numbers.length; i += 1 ){
  if(numbers[i]>10){
    //console.log(numbers[i], "is greater than 10");
  }
};



//challenge 3 completed (not bonus.)

// challenge Three
// loop through the numbers array, and print numbers greater than 10, but less than 50
// bonus: Only print the odd numbers that meet these conditions
for(var i = 0; i<numbers.length; i += 1 ){
  if((numbers[i]>10) && (numbers[i]<50) && (numbers[i]%2 === 1)){
// console.log(numbers[i], "is greater than 10 and less than 50");
  }
};

function fizzBuzz(){
  for( var i=1; i<=100; i+=1){
    if(i%5 === 0 && i%3 === 0){
    //  console.log("Fizz Buzz!", i);
    }
    else if(i%5 === 0){
      //console.log("Fizz!", i);
    }
    else if(i%3 === 0){
      //console.log("Buzz", i);
    }
  }
}
fizzBuzz();

//challenge 4 not completely finished-- ask more questions?

// challenge Four
// loop through the array of random items, and print ONLY Numbers
// bonus: Tell the function to return numbers, or strings, as a parameter
var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];
// for some reason its still giving me an error on the length being undefined
// would parseFloat() work?
function getOnlyNumbers(randomItems){
  for(var i = 0; i<randomItems.length; i += 1){
    if(typeof(randomItems[n]) === "number"){
      console.log("Should return only numbers", randomItems[i]);
    }
  }
}
getOnlyNumbers();


//challenge 5 completed with bonus

// challenge Five
// loop through the array of customer objects, and print ONLY their names
// bonus: Print only customer names that begin with the letter 'A'
var customers = [
	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
  {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
];

for(var i = 0; i< customers.length; i+=1){
  //console.log(customers[i].name);
}
var string= 'A'
function searchSecondArray(string){
  names.forEach(function(name){
    if(name[0] === 'A'){
      //console.log(name);
    };
  });
};
searchSecondArray(names);



//Completed challenge 6 with bonus

// challenge Six
// loop through the array of customers, and print ONLY customers that are 'gold' and 'paid'
// bonus: Return a completely new array that meets these conditions.
var newArray = [];
for(var  j=0; j< customers.length; j+=1){
  if (customers[j].paid && customers[j].tier === "gold"){
    //console.log(customers[j].name);
    newArray.push(customers[j]);
    //console.log("my new array is:", newArray);
  }
}
