$().ready(function() {
  var path = document.location.pathname;
  var homepage = '/en/mongoid/index.html';
  if (path != homepage) {
    var header = $('#header');
    header.height('60px');
    var section = path.split('/')[2];
    var h = $('<h1>').text(section).css('line-height', 0).css('text-transform', 'capitalize');
    $('.container', header).append(h);
  }
});
