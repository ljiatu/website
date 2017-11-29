$(() => {
  const puree = $('.puree');
  $('#show').hover(
    () => {
      puree.css({ visibility: 'visible' });
    },
    () => {
      puree.css({ visibility: 'hidden' });
    });
});
