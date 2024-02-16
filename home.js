let container = document.getElementsByClassName('image-Container');
var images = ["pics/Roofing.jpeg", "pics/Roof.jpeg", "pics/Roofer.jpeg"]
var currentImage = 0;

function next() {
    currentImage += 1;
    // loops back to first image
    if(currentImage >= images.length){
        currentImage = 0;
    }
    document.getElementById('mainImage').src = images[currentImage];
}

// function previous() {
//     currentImage -= 1;

//     if(currentImage >= images.length){
//         currentImage = 3;
//     }
//     document.getElementById('mainImage').src = images[currentImage];
// }