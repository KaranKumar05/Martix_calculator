function sum() {
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