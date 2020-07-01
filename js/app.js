/*
mainShip = object with different elements 
    - laser, hp, shields, 
there are 6 alien ships that attack one at a time
mainShip gets to attack first then the alien ship attacks
once the alien ship 


*/

/*

class Ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        this.ship = []
    }
    getRandom(min,max) {
        // min = Math.ceil(min); 
        // max = Math.floor(max); 
         return Math.random()*(max-min +min);
     }
    generateShip() {
        const newShip = new Ship(this.name, this.ship.length);
        this.ship.push(newShip);
        hull.getRandom(3,6)
        firepower.getRandom(2,4)
        accuracy.getRandom(.6,.8)
    }
   // getRandom() {
   //     min = Math.ceil(min); 
   //     max = Math.floor(max); 
   //     return Math.floor(Math.random()*(max-min +1))+min;
    //}
   
    
}




//class Factory {
//    constructor (name) {
//        this.name = name
//        this.ship = [];
//    }
//    generateShip () {
//        const newShip = new Ship(this.name, this.ship.length);
//        this.ship.push(newShip);
//    }
    
//}


const mainShip = new Ship('USS Schwarzenegger')
mainShip.generateShip();

const alienShip = new Ship('Alien1')
alienShip.generateShip();
alienShip.generateShip();
alienShip.generateShip();
//const mainShip = new Ship('USS Schwarzenegger', 20, 5, .7)
console.log(mainShip);
console.log(alienShip);


//const alienShip = new Ship('Alien1', 3, 2, .6)
//console.log(alienShip);

*/

// I decided to start over at this point

//Build a Space Battle JS Game
//Earth
class Earth {
    constructor(name) {
        this.name = name;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7
    }
  attack(alien) {
      let attackChance = Math.random();
      if(attackChance <= this.accuracy) {
          alien.hull -= this.firepower
        return `${this.name} struck the target!`;
       } else {
           return `${this.name} missed the target.`
       }
  }
};
//Alien
class Alien {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(earth) {
        let attackChance = Math.random();
        if(attackChance <= this.accuracy) {
            earth.hull -= this.firepower
          return `${this.name} has struck your ship!`;
         } else {
             return `${this.name} has missed your ship!`
         }
    }
};
//const UssSchwartz = new Earth ('USS Schwarzenegger');
//console.log(ussSchwartz);
//alien arrays
let alienShips = ['Death Star', 'nova', 'Tartan', 'EbonHawk', 'Ghost', 'Gauntlet Fighter']; //there should be 6 ships - 1 at a time
let alienHullValues = [3, 4, 5, 6]; //hull should be between 3 & 6
let alienFirePower = [2, 3, 4]; //firepower should be between 2 & 4
let alienAccuracy = [.6, .7, .8]; //accuracy should be between .6 & .8
//building alien ships (6 total) with random hull, fire power, and accuracy from arrays
let buildAlienShip = () => {
    //for loop to create 6 ships
    for (let i = 1; i <= 6; i++) {
        //let name = 'Alien Ship' + i ;
        //use math.random to randomly select items in the array
        let name = alienShips[Math.floor(Math.random() * 6)];
        let hull = alienHullValues[Math.floor(Math.random() * 4)];
        let firepower = alienFirePower[Math.floor(Math.random() * 3)];
        let accuracy = alienAccuracy[Math.floor(Math.random() * 3)];
        return alienShips[i] = new Alien (name, hull, firepower, accuracy);
    }
}

console.log(buildAlienShip());

