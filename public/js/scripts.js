const lenis = new Lenis({
  lerp: 0.1
})

/*lenis.on('scroll', (e) => {
  console.log(e)
})*/

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var parallaxHandler = function () {
  var scrollTop = $(this).scrollTop();

  var $cloud = $('.parallax-box__cloud');
  var $mountain1 = $('.parallax-box__mountain1');
  var $mountain2 = $('.parallax-box__mountain2');

  // Define maximum movement limits
  var maxMoveDown = 100; // Maximum pixels to move down
  var maxMoveUp = 100;   // Maximum pixels to move up

  // Define scaling factor
  var scaleFactor = 0.0001; // Adjust this value to control the scaling speed
  var maxScale = 1.4;      // Maximum scale value

  // Define offset to start parallax effect
  var parallaxStart = 200; // Start parallax after scrolling 200px

  // Calculate the movement for each image
  var moveImage1 = 0;
  var moveImage2 = 0;
  var scaleImage1 = 1;

  if (scrollTop > parallaxStart) {
    var parallaxScroll = scrollTop - parallaxStart;
  }

  // Calculate the movement for each image
  var moveImage1 = (scrollTop - $mountain2.offset().top) * 0.15; // Move down
  var moveImage2 = (scrollTop - $cloud.offset().top) * -0.08; // Move up

  // Apply the max limits
  if (moveImage1 > maxMoveDown) moveImage1 = maxMoveDown;
  if (moveImage2 < -maxMoveUp) moveImage2 = -maxMoveUp;

  // Calculate the scale for $mountain1
  var scaleImage1 = 1 + (scrollTop * scaleFactor);
  if (scaleImage1 > maxScale) scaleImage1 = maxScale;

  $mountain1.css('transform', 'scale(' + scaleImage1 + ')');
  $mountain2.css('transform', 'translateY(' + moveImage1 + 'px)');
  $cloud.css('transform', 'translateY(' + moveImage2 + 'px)');
}

$(window).on('scroll', function() {
  parallaxHandler();
});
$(window).on('load', function() {
  parallaxHandler();
});
