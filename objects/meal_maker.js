const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizer) {
      if(typeof appetizer === 'string' && appetizer.length > 0) {
        this._courses['appetizers'].push(appetizer);
      } else {
        return 'That is not an appetizer';
      }
    },
    set mains(main) {
      if(typeof main === 'string' && main.length > 0) {
        this._courses['mains'].push(main);
      } else {
        return 'That is not a main';
      }
    },
    set desserts(dessert) {
      if(typeof dessert === 'string' && dessert.length > 0) {
        this._courses['desserts'].push(dessert);
      } else {
        return 'That is not a dessert';
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        dishName,
        dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      let num = Math.floor(Math.random() * dishes.length);
      return dishes[num];
    },
    generateRandomMeal: () => {
      const appetizer = getRandomDishFromCourse('appetizers');
      const main = getRandomDishFromCourse('mains');
      const dessert = getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.price}. The total cost is ${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 5.00);
  menu.addDishToCourse('appetizers', 'Poppadom', 1.00);
  menu.addDishToCourse('appetizers', 'Sarni', 2.00);
  menu.addDishToCourse('mains', 'Dan Sak', 4.5);
  menu.addDishToCourse('mains', 'Rogan', 4.00);
  menu.addDishToCourse('mains', 'Madras', 3.00);
  menu.addDishToCourse('desserts', 'Chocolate Tart', 3.00);
  menu.addDishToCourse('desserts', 'Ice Cream', 2.00);
  menu.addDishToCourse('desserts', 'Fudge', 3.00);
  
  const meal = menu.getRandomDishFromCourse('appetizers');
  
  console.log(meal);
  