// localStorage.setItem("sortingMode", "default");

$(document).ready(function() {
    /* Profile */
    $(document).click(function(event) { 
        if (event.target === document.getElementById("profile")) { //show when clicked profile icon
            $("#profileDropdown").toggle();
        } else if (!checkChildren(event.target, document.getElementById("profileContainer"))) { //hide if clicked outside of the dropdown menu
            $("#profileDropdown").toggle(false);
        }
    });
});

//Recursively check all children to check for a match (don't need base case in beginning because will eventually reach element with no children)
function checkChildren(target, currElement) {
    let found = false;
    for (let i = 0; i < currElement.children.length; i++) {
        found = checkChildren(target, currElement.children[i]);
        if (found) {
            return true;
        }
    }
    return target === currElement;
}