const utils = {
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
        const numberVariations = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < numberVariations.length; j++) {
                const candidateSet = numberVariations[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    numberVariations.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[utils.random(0, sums.length - 1)];
    },
};

export default utils;