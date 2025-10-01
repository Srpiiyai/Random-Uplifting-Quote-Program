// const robot = {
//   _model: "1E78V2",
//   _energyLevel: 100,
//   get energyLevel() {
//     if (typeof this._energyLevel) {
//       return `My current energy level is ${this._energyLevel}`;
//     } else {
//       return 'System malfunction: cannot retrieve energy level';
//     }
//   },
// };

// console.log(robot.energyLevel);


const target = {a: 1, b: 2, d: 5};
const source = {b: 6, c: 7, d: 8};

const result = Object.assign(target,source);

console.log(result); // {a: 1, b: 6, d: 8, c: 7}



// Practice with objects
const team = {
  _players: [
    {firstName: 'Kylian', lastName: 'Mbappe', age: 26},
    {firstName: 'Vinícius', lastName: 'Júnior', age: 25},
    {firstName: 'David', lastName: 'Alaba', age: 33}
  ],
  _games: [
    {opponent: 'Dortmund', teamPoints: 3, opponentPoints: 2},
    {opponent: 'Juventus', teamPoints: 1, opponentPoints: 0},
    {opponent: 'RB Salzburg', teamPoints: 3, opponentPoints: 0}
  ],
  get players() {
    return Object.entries(this._players);
  },
  get games() {
    return Object.entries(this._games);
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {firstName: newFirstName, lastName: newLastName, age: newAge};
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team.players)
console.log(team.games)



// Cleaning up a paragraph
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word => {count++})

storyWords = storyWords.filter(word => {
  if (word !== unnecessaryWord) {
    return word;
  }
});

storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});

storyWords[badWordIndex] = 'really';

let lengthCheck = storyWords.every(word => {
  return word.length <= 10
  });
console.log(lengthCheck)

let longestWord = storyWords.findIndex(word => {
  return word.length > 10;
});
console.log(longestWord)
console.log(storyWords[longestWord])

storyWords = storyWords.map(word => {
  if (word === storyWords[longestWord]) {
    return 'stunning';
  } else {
    return word;
  }
});

// console.log(storyWords.join(' '));




function groceries(arr) {
  if (arr.length === 1) {
    return arr[0].item;
  } else if (arr.length == 2) {
    return `${arr[0].item} and ${arr[1].item}`
  } else {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[arr.length - 2]) {
        string += arr[i].item;
      } else if (arr[i] === arr[arr.length - 1]) {
        string += ` and ${arr[i].item}`;
      } else {
        string += `${arr[i].item}, `;
      }
    }
    return string;
  }
};


console.log(groceries([{item: 'Cheese Balls'}]));
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ))



function subLength(string, letter) {
  const stringLowered = string.toLowerCase();
  let counter = 0;

  for (let i = 0; i < stringLowered.length; i++) {
    if (stringLowered[i] === letter) {
      counter++;
    }
  }

  if (counter < 2 || counter > 2) {
    return 0;
  } else {
    const firstIndexLoc = stringLowered.indexOf(letter);
    const lastIndexLoc = stringLowered.lastIndexOf(letter);
    const difference = (lastIndexLoc - firstIndexLoc) + 1;

    return difference;
  }
};

// console.log(subLength('cheesecake', 'c'))


function factorial(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
};

// console.log(factorial(3))





// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let randomNumber = Math.floor(Math.random() * 15);
      let randomBase = returnRandBase();
      if (this.dna[randomNumber] !== randomBase) {
        this.dna[randomNumber] = randomBase;
      }
      return arr;
    },
    compareDNA(obj) {
      const comparingArr = obj.dna;
      let counter = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === comparingArr[i]) {
          counter++;
        }
      }
      const result = Math.floor((counter / 15) * 100);
      return `specimen #1 and specimen #2 have ${result}% DNA in common.`;
    },
    willLikelySurvive() {
      let counter = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "C" || arr[i] === "G") {
          counter++;
        }
      }
      const result = Math.floor((counter / 15) * 100);
      if (result >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());

console.log(test1.dna);
// console.log(test1.mutate());
console.log();
console.log(test2.dna);
console.log(test1.compareDNA(test2));
console.log(test1.willLikelySurvive());

// const pAequor30 = [];

// for (let i = 1; i <= 30; i++) {
//   pAequor30.push(pAequorFactory(i, mockUpStrand()));
// }

// console.log(pAequor30);

