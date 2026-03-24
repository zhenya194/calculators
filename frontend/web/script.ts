const label = document.getElementById("arithmetic")
function writesymbol() {
    console.log("Wrote")
}

// themes
function grayTheme() {
    localStorage.clear()
    localStorage.setItem("theme", "gray")
    document.body.style.backgroundColor = "gray"
}
function whiteTheme() {
    localStorage.clear()
    localStorage.setItem("theme", "white")
    document.body.style.backgroundColor = "white"
}
