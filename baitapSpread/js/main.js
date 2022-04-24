const heading = document.querySelector(".heading");
const char = heading.innerText;
const textJump = (char) => {
    return [...char].map((char) => {
        return `<span>${char}</span> `;
    });
};
heading.innerHTML = textJump(char);
