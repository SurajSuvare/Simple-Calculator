
let modebtn = document.querySelector(".mode");
let bodymode = document.querySelector("body");
let boxes = document.querySelector(".box");
let input = document.querySelector("#display");
let calBox = document.querySelector(".cal-box");
let currmode = "light";

modebtn.addEventListener("click", () => {
    if(currmode === "light"){
        currmode = "dark";
        bodymode.classList.add("dark")
        bodymode.classList.remove("light");
    }
    else if(currmode === "dark"){
        currmode = "skyblue";
        bodymode.classList.add("skyblue");
        bodymode.classList.remove("dark");
        // document.querySelector("h1").style.color = "red";
        calBox.classList.add("backcolor");
    }
    else {
        currmode = "light";
        bodymode.classList.add("light");
        bodymode.classList.remove("skyblue");
        calBox.classList.remove("backcolor");
    }
    console.log(currmode);
});

 