describe("canReConfigure", () => {
    it("should be a function", () => {
        expect(typeof canReConfigure).toBe("function");
    });
    it("should return boolean", () => {
        expect(typeof canReConfigure()).toBe("boolean");
    });
    it("should throw if any parameter is missing", () => {
        expect(() => canReConfigure()).toThrow();
        expect(() => canReConfigure("from")).toThrow();
        expect(() => canReConfigure(undefined, "to")).toThrow();
    });
    it("should return false if booth parameters lenth is different", () => {
        expect(canReConfigure("from", "to")).toBe(false);
    });
    it('should return false if chars isnot unique in the parameter', () => {
        expect(canReConfigure("abc", "abb")).toBe(false);
        expect(canReConfigure("aab", "ddd")).toBe(false);
    });
    it("should return false if is not the same order", () => {
        expect(canReConfigure("xbox", "abvc")).toBe(false);
        expect(canReConfigure("js", "jr")).toBe(true);
    });
});
function canReConfigure(from, to) {
    if (from === undefined || to === undefined) {
        throw new Error("from and to are required");
    }
    if (from.length !== to.length) {
        return false;
    }
    if (numberOfUniqueChars(from) !== numberOfUniqueChars(to)) {
        return false;
    }
    const transformations = {};
    for (let i = 0; i < from.length; i++) {
        const fromChar = from[i];
        const toChar = to[i];
        const storedChar = transformations[fromChar];
        if (storedChar !== undefined && storedChar !== toChar) {
            return false;
        }
    }
    return true;
}
function numberOfUniqueChars(str) {
    return new Set(str).size;
}
