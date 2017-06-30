var b1 = {name: 'Pygmy Owl', species: 'Owl', gender: 'female', img: ''};
var b2 = {name: 'Western Meadowlark', species: 'meadowlark', gender: 'female', img: ''};

console.log(b1);
console.log(b2);

function Bird(name, species, gender, img, predator){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
  this.predator = predator ? true : false;
}
var b3 = new Bird('Purple Finch','Haemorhous purpureus','male', 'http://mtnhp.org/thumbnail/defaultGen.aspx?itemid=90723&names=Purple%20Finch%20Haemorhous%20purpureus&copyright=Dr.%20Dan%20Sudia,%20Florida%20Museum%20of%20Natural%20History.%20www.flmnh.ufl.edu/natsci/ornithology/sephotos&photographer=Dan%20Sudia&maxWidth=434&maxHeight=400')
 console.log(b3);

var b4 = new Bird('Blue Jay', 'corvidae', 'female', '')
console.log(b4);
var b5 = new Bird('Belted Kingfisher', 'Alcedinidae', 'Male', 'http://mtnhp.org/thumbnail/defaultGen.aspx?itemid=243792&names=Belted%20Kingfisher%20Megaceryle%20alcyon&copyright=Nathan%20DeBoer&photographer=Nathan%20DeBoer&maxWidth=434&maxHeight=400' )
var b6 = new Bird('Sharp Tailed Grouse', 'Tympanuchus phasianellus', 'Female', 'http://mtnhp.org/thumbnail/defaultGen.aspx?itemid=90484&names=Sharp-tailed%20Grouse%20Tympanuchus%20phasianellus&copyright=2003%20by%20Chuck%20Carlson&photographer=Chuck%20Carlson&maxWidth=434&maxHeight=400')
var b7 = new Bird('Ring-necked Pheasant','Phasianus colchicus', 'Male', 'http://mtnhp.org/thumbnail/defaultGen.aspx?itemid=241125&names=Ring-necked%20Pheasant%20Phasianus%20colchicus&copyright=Nathan%20DeBoer&photographer=Nathan%20DeBoer&maxWidth=434&maxHeight=400')
var b8 = new Bird('Ruffed Grouse', 'Bonasa umbellus', 'Male', 'http://mtnhp.org/thumbnail/defaultGen.aspx?itemid=229389&names=Ruffed%20Grouse%20Bonasa%20umbellus&copyright=David%20Buck&photographer=David%20Buck&maxWidth=434&maxHeight=400')
var b9 = new Bird('Spruce Grouse', 'Falcipennis canadensis', 'Male', 'http://mtnhp.org/thumbnail/defaultGen.aspx?itemid=266054&names=Spruce%20Grouse%20Falcipennis%20canadensis&copyright=Ryan%20Schmaltz&photographer=Ryan%20Schmaltz&maxWidth=434&maxHeight=400')
var b10 = new Bird('Wild Turkey', 'Meleagris gallopavo', 'Male', 'http://mtnhp.org/thumbnail/defaultGen.aspx?itemid=251913&names=Wild%20Turkey%20Meleagris%20gallopavo&copyright=Merle%20Ann%20Loman&photographer=Merle%20Ann%20Loman&maxWidth=434&maxHeight=400')




var title = "Birdstagram";
 var birds = new Array()
 birds.push(b3,b4,b5,b6,b7,b8,b9,b10)
console.log(birds);


var app = new Vue({
  el: '#app',//where the app hooks into Vue
  data: {
    title: title,
    birds: birds,
    name: undefined,
    species: undefined,
    gender: undefined,
    img: undefined,
  },
  'methods': {
    addBird: function(){
      var newBird = new Bird(this.name, this.species, this.gender, this.img);
      this.birds.push(newBird);
      console.log(this.birds)
      this.name ='';
      this.species ='';
      this.gender ='';
      this.img ='';
    }

  }

})
