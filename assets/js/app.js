document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);

  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);

  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);

  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);

});

// Or with jQuery

$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.carousel').carousel();
  $('.parallax').parallax();

  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
  });

});