$(document).ready(function() {
    /* Add course */
    $(document).click(function(event) {
        if (checkChildren(event.target, document.getElementById("addCourse"))) {
            // $("#grayOut").css("visibility", "visible");
            $("#grayOut").fadeIn(300);
        } else if (!checkChildren(event.target, document.getElementById("addCoursePrompt")) || checkChildren(event.target, document.getElementById("closeAddCourse"))) {
            // $("#grayOut").css("visibility", "hidden");
            $("#grayOut").fadeOut(300);
        }
    });

    /* Filter */
    $(document).click(function(event) { 
        if (event.target === document.getElementById("filter")) { //show dropdown menu when clicked filter icon
            $("#filterDropdown").toggle();
        } else { //hide in all other cases (should hide after selecting a filter option too)
            $("#filterDropdown").toggle(false);
        }
    });

    /* Load courses */
    loadCourses(localStorage.getItem("sortingMode"));

    /* Sorting courses */
    $("#sortAlph").click(function() {
        localStorage.setItem("sortingMode", "alphabetical");
        loadCourses(localStorage.getItem("sortingMode"));
    });
    $("#sortDef").click(function() {
        localStorage.setItem("sortingMode", "default");
        loadCourses(localStorage.getItem("sortingMode"));
    });
});

function loadCourses(sortingMode) {
    $.ajax({
        type: "GET",
        url: "../scripts/sampleCourses.json",
        dataType: "json",
        success: function (jsonData) {
            let courses = jsonData.courses;
            let output = "";
            if (sortingMode != "default" && sortingMode != "alphabetical" && sortingMode != null) { //sortingMode == null means a filter hasn't ever been chosen
                console.log("ERROR: Invalid sorting mode");
                alert("Loading courses failed");
                return;
            }
            if (sortingMode === "alphabetical") { //sort courses array alphabetically by code
                localStorage.setItem("sortingMode", "alphabetical");
                courses.sort(function(c1, c2) {
                    return (c1.code).localeCompare(c2.code);
                });
            } else {
                localStorage.setItem("sortingMode", "default");
            }
            $(courses).each(function(i, course) { //i indented the code here just to make it easier to visualize
                output += "<a href = '" + course.url + "'>";
                    output += "<div class = 'courseBlock'>";
                        output += "<div id = 'background-" + i + "' class = 'background'></div>";
                        output += "<div class = 'courseInfo'>";
                            output += "<div class = 'fullCourseTitle'><span class = 'courseCode'>" + course.code + "</span> -<br><span class = 'courseTitle'>" + course.title + "</span></div>";
                            output += "<div class = 'instructors'>";
                            let numInstructors = Object.keys(course.instructors).length;
                            for (let i = 0; i < numInstructors; i++) {
                                output += course.instructors[i] + "<br>";
                            }
                            output += "</div>";
                        output += "</div>";
                    output += "</div>";
                output += "</a>";
            });
            $("#courses").html(output);
            $(courses).each(function(i, course) {
                $("#background-" + i).css("background-color", course.backgroundColor);
            });
            updateMenu(sortingMode);
        },
        error: function(xhr, status, errorThrown) {
            console.log("ERROR:");
            console.log(xhr);
            console.log(status);
            console.log(errorThrown);
            alert("JSON get request failed (courseLanding.js)");
        }
    });
}