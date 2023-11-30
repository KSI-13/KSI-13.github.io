var innerDropdown = document.getElementById("inner-dropdown");
var buttonInfo = document.getElementById("button-info");

buttonInfo.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the click event from reaching the document level
    innerDropdown.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    var isClickInside = innerDropdown.contains(event.target);

    if (!isClickInside) {
        innerDropdown.classList.remove("active");
    }
});