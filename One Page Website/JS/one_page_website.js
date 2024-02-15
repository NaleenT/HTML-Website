// Open the Lightbox
function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightboxModal');
    var lightboxImage = document.getElementById('lightboxImage');

    lightboxImage.src = imageSrc; // Set the source of the clicked image
    lightbox.style.display = 'block'; // Display the lightbox
}

// Close the Lightbox
function closeLightbox() {
    document.getElementById('lightboxModal').style.display = 'none';
}

// Modify the openLightbox function to apply the shadowbox effect
function openLightbox(imageSrc) {
    var lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightboxImage.classList.add('shadowbox'); // Add shadowbox effect
    document.getElementById('lightboxModal').style.display = 'block';
}