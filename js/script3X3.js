// js for 3X3 matrix 
function sum() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    X11 = Number(X11);
    let X12 = document.getElementById("X12").value;
    X12 = Number(X12);
    let X13 = document.getElementById("X13").value;
    X13 = Number(X13);
    // // row 2
    let X21 = document.getElementById("X21").value;
    X21 = Number(X21);
    let X22 = document.getElementById("X22").value;
    X22 = Number(X22);
    let X23 = document.getElementById("X23").value;
    X23 = Number(X23);
    // // row 3
    let X31 = document.getElementById("X31").value;
    X31 = Number(X31);
    let X32 = document.getElementById("X32").value;
    X32 = Number(X32);
    let X33 = document.getElementById("X33").value;
    X33 = Number(X33);
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    Y11 = Number(Y11);
    let Y12 = document.getElementById("Y12").value;
    Y12 = Number(Y12);
    let Y13 = document.getElementById("Y13").value;
    Y13 = Number(Y13);
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    Y21 = Number(Y21);
    let Y22 = document.getElementById("Y22").value;
    Y22 = Number(Y22);
    let Y23 = document.getElementById("Y23").value;
    Y23 = Number(Y23);
    // // row 3
    let Y31 = document.getElementById("Y31").value;
    Y31 = Number(Y31);
    let Y32 = document.getElementById("Y32").value;
    Y32 = Number(Y32);
    let Y33 = document.getElementById("Y33").value;
    Y33 = Number(Y33);

    document.getElementById("Z11").value = X11 + Y11;
    document.getElementById("Z12").value = X12 + Y12;
    document.getElementById("Z13").value = X13 + Y13;
    document.getElementById("Z21").value = X21 + Y21;
    document.getElementById("Z22").value = X22 + Y22;
    document.getElementById("Z23").value = X23 + Y23;
    document.getElementById("Z31").value = X31 + Y31;
    document.getElementById("Z32").value = X32 + Y32;
    document.getElementById("Z33").value = X33 + Y33;

}
function sub() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    let X12 = document.getElementById("X12").value;
    let X13 = document.getElementById("X13").value;
    // // row 2
    let X21 = document.getElementById("X21").value;
    let X22 = document.getElementById("X22").value;
    let X23 = document.getElementById("X23").value;
    // // row 3
    let X31 = document.getElementById("X31").value;
    let X32 = document.getElementById("X32").value;
    let X33 = document.getElementById("X33").value;
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    let Y12 = document.getElementById("Y12").value;
    let Y13 = document.getElementById("Y13").value;
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    let Y22 = document.getElementById("Y22").value;
    let Y23 = document.getElementById("Y23").value;
    // // row 3
    let Y31 = document.getElementById("Y31").value;
    let Y32 = document.getElementById("Y32").value;
    let Y33 = document.getElementById("Y33").value;

    document.getElementById("Z11").value = X11 - Y11;
    document.getElementById("Z12").value = X12 - Y12;
    document.getElementById("Z13").value = X13 - Y13;
    document.getElementById("Z21").value = X21 - Y21;
    document.getElementById("Z22").value = X22 - Y22;
    document.getElementById("Z23").value = X23 - Y23;
    document.getElementById("Z31").value = X31 - Y31;
    document.getElementById("Z32").value = X32 - Y32;
    document.getElementById("Z33").value = X33 - Y33;

}
function multi() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    let X12 = document.getElementById("X12").value;
    let X13 = document.getElementById("X13").value;
    // // row 2
    let X21 = document.getElementById("X21").value;
    let X22 = document.getElementById("X22").value;
    let X23 = document.getElementById("X23").value;
    // // row 3
    let X31 = document.getElementById("X31").value;
    let X32 = document.getElementById("X32").value;
    let X33 = document.getElementById("X33").value;
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    let Y12 = document.getElementById("Y12").value;
    let Y13 = document.getElementById("Y13").value;
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    let Y22 = document.getElementById("Y22").value;
    let Y23 = document.getElementById("Y23").value;
    // // row 3
    let Y31 = document.getElementById("Y31").value;
    let Y32 = document.getElementById("Y32").value;
    let Y33 = document.getElementById("Y33").value;

    document.getElementById("Z11").value = X11 * Y11;
    document.getElementById("Z12").value = X12 * Y12;
    document.getElementById("Z13").value = X13 * Y13;
    document.getElementById("Z21").value = X21 * Y21;
    document.getElementById("Z22").value = X22 * Y22;
    document.getElementById("Z23").value = X23 * Y23;
    document.getElementById("Z31").value = X31 * Y31;
    document.getElementById("Z32").value = X32 * Y32;
    document.getElementById("Z33").value = X33 * Y33;

}
function divi() {
    event.preventDefault();
    // Martix 1 input 
    // row 1
    let X11 = document.getElementById("X11").value;
    let X12 = document.getElementById("X12").value;
    let X13 = document.getElementById("X13").value;
    // // row 2
    let X21 = document.getElementById("X21").value;
    let X22 = document.getElementById("X22").value;
    let X23 = document.getElementById("X23").value;
    // // row 3
    let X31 = document.getElementById("X31").value;
    let X32 = document.getElementById("X32").value;
    let X33 = document.getElementById("X33").value;
    // // Matrix 2 input 
    // // row 1
    let Y11 = document.getElementById("Y11").value;
    let Y12 = document.getElementById("Y12").value;
    let Y13 = document.getElementById("Y13").value;
    // // row 2
    let Y21 = document.getElementById("Y21").value;
    let Y22 = document.getElementById("Y22").value;
    let Y23 = document.getElementById("Y23").value;
    // // row 3
    let Y31 = document.getElementById("Y31").value;
    let Y32 = document.getElementById("Y32").value;
    let Y33 = document.getElementById("Y33").value;

    Z11 = X11 / Y11;
    Z12 = X12 / Y12;
    Z13 = X13 / Y13;
    Z21 = X21 / Y21;
    Z22 = X22 / Y22;
    Z23 = X23 / Y23;
    Z31 = X31 / Y31;
    Z32 = X32 / Y32;
    Z33 = X33 / Y33;

    document.getElementById("Z11").value = Z11.toFixed(1);
    document.getElementById("Z12").value = Z12.toFixed(1);
    document.getElementById("Z13").value = Z13.toFixed(1);
    document.getElementById("Z21").value = Z21.toFixed(1);
    document.getElementById("Z22").value = Z22.toFixed(1);
    document.getElementById("Z23").value = Z23.toFixed(1);
    document.getElementById("Z31").value = Z31.toFixed(1);
    document.getElementById("Z32").value = Z32.toFixed(1);
    document.getElementById("Z33").value = Z33.toFixed(1);

}

function clr() {
    document.getElementById("X11").value = ""
    document.getElementById("X12").value = ""
    document.getElementById("X13").value = ""
    document.getElementById("X21").value = ""
    document.getElementById("X22").value = ""
    document.getElementById("X23").value = ""
    document.getElementById("X31").value = ""
    document.getElementById("X32").value = ""
    document.getElementById("X33").value = ""
    document.getElementById("Y11").value = ""
    document.getElementById("Y12").value = ""
    document.getElementById("Y13").value = ""
    document.getElementById("Y21").value = ""
    document.getElementById("Y22").value = ""
    document.getElementById("Y23").value = ""
    document.getElementById("Y31").value = ""
    document.getElementById("Y32").value = ""
    document.getElementById("Y33").value = ""
    document.getElementById("Z11").value = ""
    document.getElementById("Z12").value = ""
    document.getElementById("Z13").value = ""
    document.getElementById("Z21").value = ""
    document.getElementById("Z22").value = ""
    document.getElementById("Z23").value = ""
    document.getElementById("Z31").value = ""
    document.getElementById("Z32").value = ""
    document.getElementById("Z33").value = ""
}