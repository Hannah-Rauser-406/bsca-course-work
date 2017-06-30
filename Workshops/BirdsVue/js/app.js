var b1 = {name: 'Pygmy Owl', species: 'Owl', gender: 'female', img: ''};
var b2 = {name: 'Western Meadowlark', species: 'meadowlark', gender: 'female', img: ''};

console.log(b1);
console.log(b2);

function Bird(name, species, gender, img){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;

}
var b3 = new Bird('brown headed cowbird','cowbird','male', 'http://d2fbmjy3x0sdua.cloudfront.net/cdn/farfuture/g_-iMVxLCj-jig9bJJgJ-6SOnqM5P49jToTcO-PxgSw/mtime:1422549877/sites/default/files/Bronzed_Cowbird_k07-7-046_l_1.jpg')
 console.log(b3);
