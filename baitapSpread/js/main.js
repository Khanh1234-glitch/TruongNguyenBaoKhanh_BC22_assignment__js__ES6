const textJump = (char,join,arr) => {
    const text = document.querySelector(".heading").innerHTML;
    char = text.split(" ");
    join = char.join(" ");
    arr = [...join];
    let content = "";
    for (let i in arr) {
        content += `<span>${arr[i]}</span>`
    }
    document.querySelector(".heading").innerHTML = content;
};
textJump();
