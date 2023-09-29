$(document).ready(function() {
    $(".questionHeader").click(function() {
        $("#whiteOut").css("display", "initial");
    });

    $("#backArrow").click(function() {
        $("#whiteOut").css("display", "none");
    });

    if (localStorage.getItem("user") === "teacher") {
        let teacherOptions = document.getElementsByClassName("teacherOptions");
        for (let i = 0; i < teacherOptions.length; i++) {
            $(teacherOptions[i]).css("display", "initial");
        }
    }
});