const {extractDomainName}= require("./getDomain");
describe('Name of the group', () => {
    it('should extract domain', () => {
        const url = 'http://www.zombie-bites.com';
        const result = extractDomainName(url);
        expect(result).toBe('zombie-bites');
    });
});