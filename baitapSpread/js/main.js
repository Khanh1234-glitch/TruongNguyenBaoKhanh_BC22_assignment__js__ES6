const textJump = (char) => {
    const text = document.querySelector(".heading").innerHTML;
    char = text.split(" ");
    const join = char.join(" ");
    const arr = [...join];
    let content = "";
    for (let i in arr) {
        content += `<span>${arr[i]}</span>`
    }
    document.querySelector(".heading").innerHTML = content;
};
textJump();
