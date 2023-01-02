const randomMethods = {

    getRandomIntInclusive(min, max) {
        const roundedMin = Math.floor(min);
        const roundedMax = Math.floor(max);
        return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
    },

    getRandomItem(arr) {
        const randomIndex = randomMethods.getRandomIntInclusive(0, arr.length - 1);
        return arr[randomIndex];
    },
};

module.exports = randomMethods;
