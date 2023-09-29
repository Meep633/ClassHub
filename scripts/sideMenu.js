// Not putting this in allPages.js because the menu shouldn't be there until after the user logs in

$(document).ready(function() {
    /* Filling in menu with course links */
    updateMenu(localStorage.getItem("sortingMode"));
    
    /* When clicking on menu button, slide menu in */
    $("#menuButton").click(function() {
        $("#menu").toggle("slide");
    });
});

function updateMenu(sortingMode) {
    let pathname = window.location.pathname;
    let addon = "";
    if (pathname.length >= 19 && pathname.substring(pathname.length-19) === "/courses/index.html") {
        addon = "";
    } else if (pathname.length >= 10 && pathname.substring(pathname.length-10) === "index.html") {
        addon = "../";
    } else {
        addon = "../../";
    }
    $.ajax({
        type: "GET",
        url: addon + "../scripts/sampleCourses.json",
        dataType: "json",
        success: function (jsonData) {
            //get every course and put them into <a> tags and place them into menu
            let courses = jsonData.courses;
            let output = "";
            if (sortingMode != "default" && sortingMode != "alphabetical" && sortingMode != null) {
                console.log("ERROR: Invalid sorting mode");
                alert("Loading menu failed");
                return;
            }
            if (sortingMode === "alphabetical") { //sort courses array alphabetically by code
                courses.sort(function(c1, c2) {
                    return (c1.code).localeCompare(c2.code);
                });
            }
            $(courses).each(function(i, course) {
                output += "<a href = '" + addon + course.url + "'><div class = 'menuBlock'><span class = 'courseCode'>" + course.code + "</span> - <span class = 'courseTitle'>" + course.title + "</span></div></a>";
            });
            $("#courseLinks").html(output);
        },
        error: function(xhr, status, errorThrown) {
            console.log("ERROR:");
            console.log(xhr);
            console.log(status);
            console.log(errorThrown);
            alert("JSON get request failed (sideMenu.js)");
        }
    });
}