// Extend the Ninja class and create the Sensei class.
//    A Sensei should have 200 Health, 10 speed, and 10 strength by default.
//    In addition, a Sensei should have a new attribute called wisdom, and the default should be 10.
//    Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log('Ninjas name is: ' + this.name);
    }

    showStats() {
        console.log('Stats for: ' + this.name);
        console.log('Health: ' + this.health);
        console.log('Speed: ' + this.speed);
        console.log('Strength: ' + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + ' just drank sake and his health is now: ' + this.health);
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log('Speaking wisdom...');
        this.drinkSake();
        console.log(
            'What one programmer can do in one month, two programmers can do in two months'
        );
    }
}

console.log('\n  Creating Bob');
const ninja1 = new Ninja('Bob', 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
// console.log(ninja1);

console.log('\n  Creating Billy');
const ninja2 = new Ninja('Billy', 20, 5, 7);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
// console.log(ninja2);

console.log('\n  Creating Sensei Billy');
const sensei1 = new Sensei('Sensei Billy');
sensei1.showStats();
sensei1.speakWisdom();
// console.log(sensei1);
