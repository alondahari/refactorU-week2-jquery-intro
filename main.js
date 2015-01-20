$(document).on('ready', function() {
  $('.button').on('click', function(){
    $('body').append('Click!');
  });
  $('.add-h1').on('click', function(){
    $('body').append('<h1>Click!</h1>');
  });
});
