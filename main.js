$(document).on('ready', function() {
  var $lightbox = $('<div class="center lightbox">').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
  var $dismissButton = $('<button class="dismiss">Close</button>');

  $('.button').on('click', function(){
    $('body').append('Click!');
  });
  $('.add-h1').on('click', function(){
    $('body').append('<h1>Click!</h1>');
  });
  $('#add-list').on('click', function(){
    $('body').append('<ul><li>1</li><li>2</li><li>3</li></ul>');
  });

  $('p').on({
    'mouseover': function(){
      $(this).children().andSelf().css('color', 'pink');
    },
    'mouseleave': function () {
      $(this).children().andSelf().css('color', 'black');
    }
  });

  $('.heading').text(function (i,str) {
    return str + '!';
  });

  $('a').on('click', function(e){
    var navigate = confirm('Are you sure you want to leave this page?');
    if (!navigate) {
      $(this).remove();
      return false;
    }
  });

  $('.big-button').on('click', function(){
    $('body').append($lightbox.append($dismissButton));
  });

  $dismissButton.on('click', function(){
    $lightbox.remove();
  });
});
