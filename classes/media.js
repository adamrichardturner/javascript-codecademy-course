// This Project Showcases Object Oriented Programming (OOP) in JavaScript, utilising Classes 
// and objects. It was tasked to me via the Codeacademy course 'Learn JavaScript'

// There are classes below, which we used as blueprints to produce objects. 
// Media is a superclass / parent class of book, movie and CD. 
// It has properties and behaviour which are uniform or common across its child
// classes. 

// I will commment along while scrolling through the code, so you get a better idea of how
// basic OOP works in JavaScript.

class Media {
    // Classes are defined as above. 
    // Constructors initialise the object, they pass in arguments via the parameters within
    // the parenthesis. These are initialised in the constructor using the this. keyword
    // to signify that the variables initialised are sourced from this instance of the class.

    // The only parameter which doesn't have a default value is 'title', so we pass that in
    // as an argument to constructor. The rest of the properties are initialised to default
    // values e.g. isCheckedOut = false, _ratings = empty array.

    // the _ behind each of the property names indicates that the developer does not want
    // this value to be changed or accessed directly. To do that getter or setters should be used 
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    // This is a getter method, it is essentially a function which returns 
    // the title and is aptly named get title()
    get title() {
      return this._title;
    }
    // This getter returns whether the item is checked out or not, initialised in the
    // constructor as false by default.
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    // Another getter method, this returns the ratings.
    get ratings() {
      return this._ratings;
    }
    // A set method, this mutates the _isCheckedOut property value to true if used.
    set isCheckedOut(checkedOut) {
      this._isCheckedOut = !checkedOut;
    }
    // Like the setter above, this method is a function which toggles the opposite value
    // for the isCheckedOut status. e.g. if false it will change it to true.
    toggleCheckoutStatus() {
      if(this._isCheckedOut === false) {
        this._isCheckedOut = true;
      } else {
        this._isCheckedOut = false;
      }
    }
    // This is a method which will calculate the average rating using the .reduce iterator. 

    getAverageRating() {
      const adder = (a, b) => a + b;
      const avgRating = this._ratings.reduce(adder) / this._ratings.length;
      return avgRating;
    }
    // Another method which adds a rating to the _ratings array via the push method. 
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  // This is a child class of Media, it therefore 'extends' media and inherits all of its
  // properties and behaviour (getters, setters, methods)
  class Book extends Media {
      // The constructor's arguments includes only the parameters which will initialise to values
      // that do not have a default value.
    constructor(author, title, pages) {
      //super(title) simply calls the parent constructor and uses the property from there
      // directly as a blueprint
      super(title);
      this._author = author;
      this._pages = pages;
    }
    // Only the unique get, set or methods that are specific to this child class need to be 
    // written, as all of the original behaviour is inherited from the parent / super class.
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
      // Creation of the Movie class highlights the time-saving and encapsulation of OOP and
      // classes in JavaScript. To produce a unique Movie class, we simply extend the parent
      // Media class, therefore inheriting all of its properties and behaviour. 
      // Only the unique properties and behaviour have to be defined in child classes. 
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  }
  // This is another example of a child class, note how brief it is.
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = [];
    }
  }
  // Now let's test the classes by instantiating new objects and assigning them to constant
  // variables. 

  // below, historyOfEverything is a const variable which holds a 'new' instance of the Book class
  // the arguments to be passed to the constructor of Book are included within the paranthesis. 
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  // Now we have created a historyOfEverything object, we can use the behaviour and mutate 
  // the properties of this object using the class blueprint. 
  const historyTitle = historyOfEverything._title;

  // Apologies, historyTitle is just a variable that holds the movie title.
  // Let's play with the historyOfEverything variable which holds a reference to
  // the new book object as defined above..
  historyOfEverything.addRating(5); // I've added a rating, which if we examine as above 
  // the addRating function within the media class, we find it simply pushes the passed in
  // argument to the end of the array using the array.push() method. 
  console.log(historyOfEverything.ratings);
  // As you can see from the terminal, the rating is 5 for this object, as we just added that rating using
  // the addRating method above. 
  // Let's add a couple more ratings and then use the getAverageRating method, which finds the average of the
  // ratings array.
  historyOfEverything.addRating(10);
  historyOfEverything.addRating(20);
  // Let's now check that the ratings array has been mutated by this method call. Which it has, we can see the
  // ratings are now [5, 10, 20]

  // Finally lets get the average rating by using that method and log it to the console
  console.log(historyOfEverything.ratings);

  // This shows that the average rating has been computed and printed to the console.
  console.log(historyOfEverything.getAverageRating());

  // That's enough for OOP today. As you can see, a movie has been made below using the Movie class to produce
  // a new object stored in the speed variable (referring to the movie 'Speed')
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  console.log(speed);
  
  // To summarise, classes act as blueprints for creating new objects. Objects are an important
  // data structure in OOP. You can assign objects to variables, nest them in arrays, and use them
  // to model real world problems, as shown in this video. 

  // Inheritance is a key concept in OOP. As discussed, child classes inherit properties and behaviour
  // from superclasses (parents). When writing software using an OOP approach, it is important to map out
  // what objects are required and how they should be organised according to inheritance. 

  // Many Thanks - Adam Turner