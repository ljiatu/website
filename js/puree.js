$(() => {
  const puree = $('.puree');
  $('#sit').hover(
    () => {
      puree.css({
        'animation-play-state': 'paused'
      });
    },
    () => {
      puree.css({
        'animation-play-state': 'running'
      });
    }
    );
});
