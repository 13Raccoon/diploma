$(document).ready(function(){
  var button = $('#ring');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function(){
    modal.addClass('modal_active');
  });

  close.on('click', function(){
    modal.removeClass('modal_active');
  })
});