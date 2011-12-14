$().ready(function() {
  var str = ".cn-fundraising{display: none;}";
  var style = document.createElement('style');
  style.type = "text/css";
  style.media = "screen";
  style.appendChild(document.createTextNode(str));
  $('body').append(style);
});
