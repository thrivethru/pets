const Pet = require('./pet');

describe("Pet class", () => {
    test("Pet must create an instance", () => {
        const pet = new Pet("Lilas", "canine", "black");
        expect(pet instanceof Pet).toBeTruthy();
    })
})