// Activates the image gallery.
// The main task is to attach an event listener to each image of the gallery
// and respond appropriately on click.

function activateGallery() {
  let thumbnails  = document.querySelectorAll("#gallery-thumbs > div > img" );
  let mainImage   = document.querySelector("#gallery-photo img");

  // the above is using different bracket notation just to indicate that either works.
// The ">" notation indicates that the 'img' is "inside" the 'div', which is inside the CSS id #gallery-thumbs

    thumbnails.forEach(function(thumbnail) {
      // Preload large images.
      let newImageSrc   = thumbnail.dataset.largeVersion;
      let largeVersion  = new Image();
      let newImageAlt   = thumbnail.alt;
      largeVersion.src  = //fill in//


         thumbnail.addEventListener("click", function() {
                // Set clicked image as display image.
        mainImage.setAttribute("src", newImageSrc);
        mainImage.setAttribute("alt", newImageAlt);

 // Change which image is current (highlights thumbnail on clicking it).
        document.querySelector(".current").classList.remove("current");
        thumbnail.parentNode.classList.add("current");

        // Image to be updated
          let galleryInfo = document.querySelector("#gallery-info");
          let title       = galleryInfo.querySelector(".title");
          let description = galleryInfo.querySelector(".description");


        // Update image info.
        title.innerHTML       = thumbnail.dataset.title;
        description.innerHTML = thumbnail.dataset.description;

      });
    });
}
