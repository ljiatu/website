// Move Puree across the screen in an infinite loop.
function loop() {
  $('.puree').css({
    right: '-25%'
  }).animate({
    right: '+=125%'
  }, {
    duration: 8000,
    easing: 'linear',
    complete: loop
  });
}

$(() => {
  loop();
});
