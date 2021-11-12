function getMiddle(s: string): string {
    if (s.length%2) {
        let middle: number = Math.floor(s.length/2);
        return s.substring(middle, middle+1);
    } else {
        let middle: number = Math.floor(s.length/2);
        return s.substring(middle-1, middle+1);
    }
}