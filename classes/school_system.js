class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents}students at the ${this._level} school level.`)
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      let randNum = Math.floor(Math.random() * substituteTeachers.length - 1);
      return substituteTeachers[randNum];
    }
  
    set numberOfStudents(num) {
      if(typeof num != 'number') {
        return 'Invalid input: numberOfStudents must be set to a Number.';
      } else {
        this._numberOfStudents = num;
      }
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle school', numberOfStudents);
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high school', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool()
  
  