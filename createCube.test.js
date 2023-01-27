function createCube(size) {
    if (size === undefined) throw new Error("size is required");
    let backSlash = "\\";
    let forwardSlash = "/";
    let underLine = "_";
    let topMiddle = forwardSlash + backSlash + underLine + backSlash+ "\n";
    let bottomMiddle = topMiddle.replaceAll("/", "\\").replaceAll("\\", "/");
    const result = topMiddle + bottomMiddle; 
    console.log(result);
    return result;
}



describe("createCube", () => {
    it("should be a function", () => {
        expect(typeof createCube).toBe("function");
    });
    it("should return a string", () => {
        expect(typeof createCube()).toBe("string");
    });
    it("should throw if size is missing", () => {
        expect(() => createCube()).toThrow();
    });
    it("should return a cube with size 1", () => {
        expect(createCube(1)).toBe(``);
    });
});
