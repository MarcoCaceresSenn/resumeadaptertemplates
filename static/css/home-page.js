$(document).ready(function() {
    // Get the carousel element
    var carousel = $('#template-carousel .carousel-inner');
  
    // Get the images from the images folder
    var images = [
      'template-test-1.png',
      'template-test-2.png',
      'template-test-3.png',
      'template-test-4.png'
    ];
  
    // Loop through the images and add them to the carousel
    for (var i = 0; i < images.length; i++) {
      var image = $('<div class="carousel-item"><img src="/static/templates/' + images[i] + '" alt="Slide ' + (i + 1) + '" class="d-block w-100 img-fluid" width="310"></div>');
      if (i === 0) {
        image.addClass('active');
      }
      carousel.append(image);
    }
  });