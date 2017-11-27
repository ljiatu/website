$(() => {
  const puree = $('.puree');
  $('#sit').hover(
    () => {
      puree.css({
        'animation-play-state': 'paused'
      }).toggleClass('hidden');
    },
    () => {
      puree.css({
        'animation-play-state': 'running'
      }).toggleClass('hidden');
    }
    );
});
