class Pet {
    constructor(name, species, color) {
        this.name = name;
        this.species = species;
        this.color = color;
    }

    changeName(newName) {
        this.name = newName;
    }
}

module.exports = Pet;