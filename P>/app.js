/*function book(title, author, pages, read){
    this.title = 'Endless Thoughts.'
    this.author = 'Fardosa Noor'
    this.pages = 200
    this.read = true
    book.info = function(){
        return this.title +' by ' + this.author +' , ' + this.pages + ' pages, not read yet.'

    }
}
console.log(book.info());*/

function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
     console.log(title + ' written by '+ author + ', has ' + pages + ' pages')
    };
};

const bookTitle = new book('Endless thoughts', 'Fardosa Noor', 200, true);
bookTitle.info();


function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
    }
    
    // Add the showNameAndColor method to the Plant prototype property
    Plant.prototype.showNameAndColor =  function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
    }
    
    // Add the amIOrganic method to the Plant prototype property
    Plant.prototype.amIOrganic = function () {
    if (this.isOrganic)
    console.log("I am organic, Baby!");
    }
    
    function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
    }
    
    // Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
    Fruit.prototype = new Plant ();
    
    // Creates a new object, aBanana, with the Fruit constructor
    var aBanana = new Fruit ("Banana", "Yellow");
    
    // Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
    console.log(aBanana.name); // Banana
    
    // Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
    console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.






    function People () {
        this.superstar = "Michael Jackson";
        }
        // Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
        People.prototype.athlete = "Tiger Woods";
        
        var famousPerson = new People ();
        famousPerson.superstar = "Steve Jobs";
        
        // The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain. 
        console.log (famousPerson.superstar); // Steve Jobs
        
        // Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.
        
        // This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
        console.log (famousPerson.athlete); // Tiger Woods
        
        // In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
        console.log (famousPerson.toString()); // [object Object]




/*function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayName = function(){
        console.log(name)
    }
}

const Player1 = new Player('Steve', 'X');
const Player2 = new Player('Also Steve', 'Y');
Player1.sayName();
Player2.sayName();*/


let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  alert(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  alert(admin.fullName); // Alice Cooper, state of admin modified
  alert(user.fullName); // John Smith, state of user protected
  




  let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }