describe("The Conatiner Component", () => {
    beforeAll(()=> console.log("before All"));

    beforeEach(()=> console.log("before Each"));

    it("Should not regress", () => expect(2 + 2).toEqual(4));

    it("Should not regress twice", () => expect(2 + 4).toEqual(6));

    afterAll(()=> console.log("after All"));

    afterEach(()=> console.log("after Each"));    
});