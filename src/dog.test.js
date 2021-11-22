const Pet = require('./pet');
const Dog = require('./dog');

describe("Dog class", () => {
    test("Dog must create an instance", () => {
        const dog = new Dog("Lilas", "black and tan", "Rat Terrier");
        expect(dog instanceof Pet).toBeTruthy();
        expect(dog instanceof Dog).toBeTruthy();
    })

    test("Dog must have a breed", () => {
        const dog = new Dog("Lilas", "black and tan", "Rat Terrier");
        expect(dog.breed).toBe("Rat Terrier");
    })
})