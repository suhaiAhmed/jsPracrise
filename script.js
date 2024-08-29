document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "alert-link"
    var alertLinks = document.querySelectorAll(".alert-link");

    // Add event listener to each alert link
    alertLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Show the alert message
            alert("This link is under construction. Check back later for updates.");
        });
    });
});