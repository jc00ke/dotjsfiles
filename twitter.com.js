$().ready(function() {
  setTimeout(function() {
    $('.promo').closest('.component').remove();
  }, 3000);

  $(document).keyup(function(e) {
    if (e.which == 118) {
      window.location.hash = "#!/retweeted_of_mine"
      return false;
    }
  });
});
