var k = 20;
for (let i = 0; i < k; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        let x = this.innerHTML;
        chkInt(x);
        sign(x);
        chkEqual(x);
        chkClr(x);
    })
}

document.addEventListener("keypress", function() {
    let x = event.key;


    // var y = event.key;
    // chkInt(y);
    // // sign(y);
    // alert(y);
    // // chkEnt(y);
    // // chkBkspc(y);


})


// Function to input a sign
function sign(x) {
    if (x === document.querySelector(".sum").innerHTML ||
        x === document.querySelector(".mod").innerHTML ||
        x === document.querySelector(".div").innerHTML ||
        x === document.querySelector(".mul").innerHTML ||
        x === document.querySelector(".sub").innerHTML) {
        if (document.querySelector(".result").innerHTML > 0) {
            document.querySelector("input").value = document.querySelector(".result").innerHTML;
            document.querySelector(".result").innerHTML = null;
        }
        document.querySelector("input").value = document.querySelector("input").value + x;

    }
}


//function to check equals
function chkEqual(x) {
    if (x === document.querySelector(".equals").innerHTML) {
        if (document.querySelector("input").value !== null) {
            var result = eval(document.querySelector("input").value);
            document.querySelector(".result").innerHTML = result;
        }
        document.querySelector("input").value = null;
    }
}
//function to Take Integer
function chkInt(x) {
    if ((x >= 0 || x === document.querySelector(".point").innerHTML)) {
        document.querySelector("input").value = document.querySelector("input").value + x;
        document.querySelector(".result").innerHTML = null;
    }
}
//Function to check Clear
function chkClr(x) {
    if (x === document.querySelector(".del").innerHTML) {
        document.querySelector("input").value = null;
        document.querySelector(".result").innerHTML = null;
    }
}
//Function to Check Enter
function chkEnt(y) {
    let x = "Enter";
    if (x === y) {
        if (document.querySelector("input").value !== null) {
            var result = eval(document.querySelector("input").value);
            document.querySelector(".result").innerHTML = result;
        }
        document.querySelector("input").value = null;
    }
}
//Function to Check Backspace

// function chkBkspc(y) {
//     let x = "Enter";
//     if (x === y) {
//         if (document.querySelector("input").value !== null) {
//             var result = eval(document.querySelector("input").value);
//             document.querySelector(".result").innerHTML = result;
//         }
//         document.querySelector("input").value = null;
//     }
// }