export const getRandomInt = function (min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


export const generateString = function (lib: string, min: number, max: number) {
    const words = lib.split(' ');
    const string = [];

    for (let i = 0; i < getRandomInt(min, max); i++) {
        string.push(words[getRandomInt(0, words.length)]);
    }

    return string.join(' ');
}