function check() {
    if (document.getElementById("password").value == document.getElementById("repassword").value) {
        alert("Submited, passwords are identical");
    } else {
        alert("Re-type Password is incorrect");
    }
}

function multi() {
    document.getElementById("result").innerHTML = ("The Result is: " + (document.getElementById("1stnbr").value * document.getElementById("2ndnbr").value));
}

function divi() {
    document.getElementById("result").innerHTML = ("The Result is: " + (document.getElementById("1stnbr").value / document.getElementById("2ndnbr").value));
}