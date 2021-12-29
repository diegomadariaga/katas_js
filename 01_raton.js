const room = [
    [" ", " ", " "],
    [" ", " ", "m"],
    [" ", " ", "*"],
];

function canMouseEat(direction, game) {
    if (direction === "up") {
        return game[1][1] === "m";
    } else if (direction === "down") {
        return game[1][1] === "m";
    } else if (direction === "left") {
        return game[1][1] === "m";
    } else if (direction === "right") {
        return game[1][1] === "m";
    }
    //ubicar el raton
    let posicionRaton = () => {
        for (let index = 0; index < game.length; index++) {
            const element = game[index];
            for (let index2 = 0; index2 < element.length; index2++) {
                const element2 = element[index2];
                if (element2 == "m") {
                    posicionRaton = [index, index2];
                }
            }
        }
    };
    //ubicar la comida
    let posicionComida = () => {
        for (let index = 0; index < game.length; index++) {
            const element = game[index];
            for (let index2 = 0; index2 < element.length; index2++) {
                const element2 = element[index2];
                if (element2 == "*") {
                    posicionComida = [index, index2];
                }
            }
        }
    };
    //comparar las posiciones
    if (posicionRaton[0] == posicionComida[0] && posicionRaton[1] == posicionComida[1]) {
        return true;
    }
    return false;
}
canMouseEat("d", room);
