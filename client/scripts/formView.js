var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {username:App.username, text:document.getElementById('message').value, roomname:App.roomname};
    Parse.create(message, function(){MessagesView.render()}, function(){console.log('fail')}); // how to gandle submitting data to the server???
    console.log('click!');
    document.getElementById('message').value ='';
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};