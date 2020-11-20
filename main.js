document.addEventListener('DOMContentLoaded', crousel);

function crousel() {
    var i = 1;

    function createCrousel() {
        if (i == 1) {
            document.getElementById('image-' + i).style.opacity = 1;
            document.getElementById('heading-' + i).style.display = "block";
        } else {
            document.getElementById('image-' + i).style.opacity = 1;
            document.getElementById('heading-' + i).style.display = "block";
            document.getElementById('image-' + (i - 1)).style.opacity = 0;
            document.getElementById('heading-' + (i - 1)).style.display = "none";
        }
        i += 1;

        setTimeout(createCrousel, 4000);
    }
    setTimeout(createCrousel, 1000);
}