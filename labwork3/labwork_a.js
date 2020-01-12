$(document).ready(function () {
    $("#ex1 > h1").css("background-color", "#696969")
});

$(document).ready(function () {
    $("a").click(function () {
        $("a").attr("href", "https://www.google.com.vn/")
    });
});

$(document).ready(function () {
    $("a").click(function () {
        $("a").text("Google Website")
    });
});

$(document).ready(function () {
    $("#field1").blur(function () {
        alert("Lost focus")
    });
});

$(document).ready(function () {
    var last, diff
    $("button").click(function (event) {
        if (last) {
            diff = event.timeStamp - last;
            $("#log").text("Number of milliseconds between the two click events on a paragraph: " + diff)
        } else {
            $("#log").append("Start timing, press again to show result" + "<br />")
        }
        last = event.timeStamp;
    });
});