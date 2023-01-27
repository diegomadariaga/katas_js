describe("create password", () => {
    it("should return a string", () => {
        const password = createPassword();
        expect(typeof password).toBe("string");
    });
    it("should return a string of length 10", () => {
        const password = createPassword({ length: 10 });
        expect(password.length).toBe(10);
    });
    it("should return a string of length 8 by default", () => {
        const password = createPassword();
        expect(password.length).toBe(8);
    });
});
function createPassword({ length = 8, capital = false, numbers = false, symbols = false } = {}) {
    let password = "";
    let acsiiRange = [34, 126];
    const numbersAcsiiRange = [48, 57];
    const capitalAcsiiRange = [65, 90];
    const symbolsAcsiiRange = [34, 47];
    for (let i = 0; i < length; i++) {
        let randomChar = Math.floor(Math.random() * (acsiiRange[1] - acsiiRange[0] + 1)) + acsiiRange[0];
        if (!numbers  && randomChar >= numbersAcsiiRange[0] && randomChar <= numbersAcsiiRange[1]) {
            i -= 1;
            continue;
        }
        if (!capital && randomChar >= capitalAcsiiRange[0] && randomChar <= capitalAcsiiRange[1]) {
            i -= 1;
            continue;
        }
        if (!symbols && randomChar >= symbolsAcsiiRange[0] && randomChar <= symbolsAcsiiRange[1]) {
            i -= 1;
            continue;
        } 
        password += String.fromCharCode(randomChar);
    }
    console.log("your pass: ", password);
    return password;
}

