function getEle(id) {
    return document.getElementById(id);
}

const getTotal = (...numbers) => {
    // console.log(numbers);
    let total = 0;
    for (let i in numbers) {
        total += numbers[i];
    }
    return total / numbers.length;
};

getEle("btnKhoi1").addEventListener("click", () => {
    let math = getEle("inpToan").value * 1;
    let physical = getEle("inpLy").value * 1;
    let chemistry = getEle("inpHoa").value * 1;
    getEle("tbKhoi1").innerHTML = getTotal(math, physical, chemistry);
});

getEle("btnKhoi2").addEventListener("click", () => {
    let literature = getEle("inpVan").value * 1;
    let history = getEle("inpSu").value * 1;
    let geography = getEle("inpDia").value * 1;
    let english = getEle("inpEnglish").value * 1;
    getEle("tbKhoi2").innerHTML = getTotal(literature, history, geography, english);
});
