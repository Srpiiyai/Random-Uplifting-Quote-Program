
// Static Methods
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNum = Math.floor(Math.random() * 5);
    return names[randomNum];
  }
}

console.log(Animal.generateName());


// Library Project
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut) {
      this._isCheckedOut = false;
    } 
    else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    const sum = this.ratings.reduce((acc, curr) =>  acc + curr, 0);
    const lengthOfArr = this.ratings.length;
    const result = sum / lengthOfArr;
    return result;
  }

  addRating(rating) {
    this.ratings.push(rating);
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


/*

Add more properties to each class (movieCast, songTitles, etc.), and getters to access them

Create a CD class that extends Media.

In .addRating(), make sure the input is between 1 and 5.

Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.

*/


// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

// Example usage with an array of song titles:
// const songPlaylist = ['Song A', 'Song B', 'Song C', 'Song D', 'Song E'];
// console.log("Original playlist:", songPlaylist);

// const shuffledPlaylist = shuffleArray(songPlaylist);
// console.log("Shuffled playlist:", shuffledPlaylist);



// School Catalogue
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
    set numberOfStudents(num) {
      if (typeof num === 'number') {
        this._numberOfStudents = num;
      }
      else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }

    quickFacts() {
      console.log(`${this.name} eduacates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeacher) {
      const randomNumber = Math.floor(Math.random() * substituteTeacher.length);
      return substituteTeacher[randomNumber];
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

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high school', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    this._sportsTeams.forEach(team => console.log(team));
    }
  }


console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
))
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track & Field']);

lorraineHansbury.quickFacts();
alSmith.sportsTeams;



class ShiftCipher {
  constructor(shiftAmount) {
    this._shiftAmount = shiftAmount;
  }

  encrypt(strToEncrypt) {
    let strCap = strToEncrypt.toUpperCase();
    let modifiedString = '';
    for (let i = 0; i < strToEncrypt.length; i++) {
      const charCode = strCap.charCodeAt(i);
      const newCharCode = charCode + this._shiftAmount;
      modifiedString += String.fromCharCode(newCharCode);
    }
    return modifiedString.replace(/[^a-zA-Z\s]/g, ' ');
  }

  decrypt(strToDecrypt) {
    let strLower = strToDecrypt.toLowerCase();
    let modifiedString = '';
    for (let i = 0; i < strLower.length; i++) {
      const charCode = strLower.charCodeAt(i);
      const newCharCode = charCode - this._shiftAmount;
      modifiedString += String.fromCharCode(newCharCode);
    }
    return modifiedString.replace(/[^a-zA-Z\s]/g, ' ');
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('JavaScript'))
console.log(cipher.decrypt('LCXCUETKRV'))