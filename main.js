$(document).on('ready', function() {
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
    return  confirm('Are you sure you want to leave this page?');
  });
});
