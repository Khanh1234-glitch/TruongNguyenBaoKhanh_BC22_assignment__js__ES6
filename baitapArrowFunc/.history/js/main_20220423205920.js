const colorList = [
        "pallet",
        "varidian",
        "pewter",
        "cerulean",
        "vermil",
        "lion",
        "lavender",
        "celadon",
        "saffron",
        "fuschia",
        "cinnabar",
    ]
    // { "pallet", "varidian", "pewter", "cerulean", "vermil", "lion", "lavender", "celadon", "saffron", "fuschia", "cinnabar" };
    // const color = prompt("Pick color");
    // console.log(colorList[color]);
for (let value of colorList) {
    console.log(`value: ${ value }`);
    const fn = () => {
        let button1 = "<button onclick='changeColor()' class= 'color-button pallet '></button>";
        let button2 = "<button onclick='changeColor()'  class= 'color-button varidian '></button>";
        let button3 = "<button class= 'color-button pewter'></button>";
        let button4 = "<button class= 'color-button cerulean'></button>";
        let button5 = "<button class= 'color-button vermil'></button>";
        let button7 = "<button class= 'color-button lion'></button>";
        let button8 = "<button class= 'color-button lavender'></button>";
        let button9 = "<button class= 'color-button celadon'></button>";
        let button10 = "<button class= 'color-button saffron'></button>";
        let button11 = "<button class= 'color-button fuschia'></button>";
        let button12 = "<button class= 'color-button cinnabar'></button>";
        document.getElementById("colorContainer").innerHTML = button1 + button2 + button3 + button4 + button5 + button7 + button8 + button9 + button10 + button11 + button12;
    }
    fn();
}
const changeColor = () => {
    document.getElementById("house").addEventListener("click", () => {
        var result;
        result.classList.add('pallet');
    })

}