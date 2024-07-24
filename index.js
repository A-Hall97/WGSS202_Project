document.addEventListener("DOMContentLoaded", function() {

    // Get all elements with class "image"
    var images = document.getElementsByClassName("image");

    // Get the modal and modal image elements
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modal-image");
    var span = document.getElementsByClassName("close")[0];

    // Loop through each image and add a click event listener
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(e) {
            var src = e.target.src; // Get the source of the clicked image
            modal.style.display = "block"; // Display the modal
            modalImage.src = src; // Set the source of the modal image
        });
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

});