const mediumScore = (...numbers) => {
    console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
const total = mediumScore(1, 2);