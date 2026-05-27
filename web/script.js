const label = document.getElementById("result")
let res = ""
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function writesymbol(numb) {
    res += numb
    label.innerHTML = res
    console.log("Wrote")
}
function deletesymbol() {
    res = res.slice(0, -1)
    label.innerHTML = res
}
function result() {
    res = eval(res)
    label.innerHTML = res
}
