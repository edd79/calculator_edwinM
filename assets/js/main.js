// *** Write your code here***
// const numbers = document.querySelectorAll("[data-number]")
// const operations = document.querySelectorAll("[data-operation]")
// const equals = document.querySelector("[data-equals]")
// const delete1 = document.querySelectorAll("[data-delete]")
// const clearAll = document.querySelectorAll("[data-clear]")
//const disp = document.getElementsByName("displayResult")

function clear() {
    document.getElementById("displayResult").reset()
}

function deletes() {
    let del = document.getElementById("displayResult")
    del.value = del.value.substring(0, del.value.length - 1)
}

function appendNumber() {

}

function chooseOperation() {

}

function compute() {
    let num = document.getElementById("displayResult").value
    let calc = eval(num)
    document.getElementById("displayResult").value = calc
}

function updateDisplay(value) {
    document.getElementById("displayResult").value += value
}