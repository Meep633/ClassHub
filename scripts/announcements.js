$(document).ready(function() {
    if (localStorage.getItem("user") === "teacher") {
        let teacherOptions = document.getElementsByClassName("teacherOptions");
        for (let i = 0; i < teacherOptions.length; i++) {
            if (teacherOptions[i].parentNode.id === "announcements") {
                $(teacherOptions[i]).css("display", "flex");
            } else {
                $(teacherOptions[i]).css("display", "initial");
            }
        }
    }
    
    $(".title").click(function(event) {
        let title = event.target;
        while (title.parentNode.className != "announcementContainer") {
            title = title.parentNode;
        }
        title = title.parentNode.children[0];
        console.log(title);
        let announcement = title.parentNode.children[1];
        let container = title.parentNode;
        let display = window.getComputedStyle(announcement).getPropertyValue("display");
        if (display === "none") {
            $(container).css("border-bottom", "solid 2px rgb(179, 186, 178)");
            $(title).css("border-bottom", "initial");
            $(announcement).show({direction: "down"});
        } else {
            $(container).css("border-bottom", "initial");
            $(title).css("border-bottom", "solid 2px rgb(179, 186, 178)");
            $(announcement).hide({direction: "up"});
        }
    });
});