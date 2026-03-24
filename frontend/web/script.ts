const label = document.getElementById("arithmetic")
function writesymbol() {
    console.log("Wrote")
}

// themes
function grayTheme() {
    localStorage.setItem("theme", "gray");
    document.body.style.backgroundColor = "gray"
}
function whiteTheme() {
    localStorage.setItem("theme", "white");
    document.body.style.backgroundColor = "white"
}
