// Js for 2X2 matrix 
function sum() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    X11 = Number(X11);
    let X12 = document.getElementById("X12").value;
    X12 = Number(X12);
    // // row 2
    let X21 = document.getElementById("X21").value;
    X21 = Number(X21);
    let X22 = document.getElementById("X22").value;
    X22 = Number(X22);
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    Y11 = Number(Y11);
    let Y12 = document.getElementById("Y12").value;
    Y12 = Number(Y12);
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    Y21 = Number(Y21);
    let Y22 = document.getElementById("Y22").value;
    Y22 = Number(Y22);

    document.getElementById("Z11").value = X11 + Y11;
    document.getElementById("Z12").value = X12 + Y12;
    document.getElementById("Z21").value = X21 + Y21;
    document.getElementById("Z22").value = X22 + Y22;
}
function sub() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    let X12 = document.getElementById("X12").value;
    // // row 2
    let X21 = document.getElementById("X21").value;
    let X22 = document.getElementById("X22").value;
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    let Y12 = document.getElementById("Y12").value;
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    let Y22 = document.getElementById("Y22").value;

    document.getElementById("Z11").value = X11 - Y11;
    document.getElementById("Z12").value = X12 - Y12;
    document.getElementById("Z21").value = X21 - Y21;
    document.getElementById("Z22").value = X22 - Y22;
}
function multi() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    let X12 = document.getElementById("X12").value;
    // // row 2
    let X21 = document.getElementById("X21").value;
    let X22 = document.getElementById("X22").value;
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    let Y12 = document.getElementById("Y12").value;
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    let Y22 = document.getElementById("Y22").value;

    document.getElementById("Z11").value = X11 * Y11;
    document.getElementById("Z12").value = X12 * Y12;
    document.getElementById("Z21").value = X21 * Y21;
    document.getElementById("Z22").value = X22 * Y22;
}
function divi() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    let X12 = document.getElementById("X12").value;
    // // row 2
    let X21 = document.getElementById("X21").value;
    let X22 = document.getElementById("X22").value;
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    let Y12 = document.getElementById("Y12").value;
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    let Y22 = document.getElementById("Y22").value;

    Z11 = X11 / Y11;
    Z12 = X12 / Y12;
    Z21 = X21 / Y21;
    Z22 = X22 / Y22;

    document.getElementById("Z11").value = Z11.toFixed(1);
    document.getElementById("Z12").value = Z12.toFixed(1);
    document.getElementById("Z21").value = Z21.toFixed(1);
    document.getElementById("Z22").value = Z22.toFixed(1);
}
function clr() {
    document.getElementById("X11").value = ""
    document.getElementById("X12").value = ""
    document.getElementById("X21").value = ""
    document.getElementById("X22").value = ""
    document.getElementById("Y11").value = ""
    document.getElementById("Y12").value = ""
    document.getElementById("Y21").value = ""
    document.getElementById("Y22").value = ""
    document.getElementById("Z11").value = ""
    document.getElementById("Z12").value = ""
    document.getElementById("Z21").value = ""
    document.getElementById("Z22").value = ""
}

