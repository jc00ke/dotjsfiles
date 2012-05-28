$().ready(function() {
  var header = $('#header');
  header.height('60px');
  var section = document.location.pathname.split('/')[2];
  var h = $('<h1>').text(section).css('line-height', 0).css('text-transform', 'capitalize');
  $('.container', header).append(h);
});
