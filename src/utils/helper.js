import { colorPallete } from "../screens/bingo/constants";

export const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[currentIndex].isSelected = currentIndex === 12 ? true : false;
        array[currentIndex].cardColor = colorPallete[Math.floor(Math.random() * 3)]
        array[randomIndex] = temporaryValue;
    }
    return array.slice();
}