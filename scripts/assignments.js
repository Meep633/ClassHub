$(document).ready(function() {
  $(".assignment").click(function(event) {
      let name = event.target;
      while (name.parentNode.className != "assignment") {
          name = name.parentNode;
      }
      name = name.parentNode.children[0];
      let description = name.parentNode.children[2];
      let container = name.parentNode;
      let display = window.getComputedStyle(description).getPropertyValue("display");
      if (display === "none") {
          $(container).css("border-bottom", "solid 2px rgb(179, 186, 178)");
          $(description).show({direction: "down"});
      } else {
          $(container).css("border-bottom", "initial");
          $(container).css("border-bottom", "solid 2px rgb(179, 186, 178)");
          $(description).hide({direction: "up"});
      }
  });
});