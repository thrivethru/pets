const Pet = require('./pet');

class Dog extends Pet {
    constructor(name, color, breed) {
        super(name, "canine", color);
        this.breed = breed;
    }

    bark(sound) {
        return `This dog goes ${sound}`;
    }
}

module.exports = Dog;
