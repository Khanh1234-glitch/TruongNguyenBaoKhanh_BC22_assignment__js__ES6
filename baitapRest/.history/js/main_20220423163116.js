const mediumScore = (...numbers) => {
    let scroreMath = document.getElementById("inpToan").value;
    console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return scroreMath;
}
const total = mediumScore(scroreMath);