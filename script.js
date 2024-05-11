document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById('check');
    if (checkbox) {
        checkbox.addEventListener("change", function() {
            var menustyles = document.querySelectorAll(".menu");
            menustyles.forEach(function(menu) {
                menu.style.left = checkbox.checked ? "0px" : ""; // Resetting left position if checkbox is unchecked
            });
        });
    }
});