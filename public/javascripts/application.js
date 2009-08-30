$(function() {
  
  var form = $('form#notepad_form');
  var notepad = $('textarea#notepad');
  var output = $('div#output');
  var cached_input = '';
  
  var process = function() {
    if (notepad.val() == cached_input) {
      return;
    }
    $.getJSON(form.attr('action'), form.serialize(), function(data, textStatus) {
      output.html(data.html);
      cached_input = notepad.val();
    });
  };
  
  notepad.keyup(process);
  
  process();
});