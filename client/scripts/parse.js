var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: Parse.server, //what else???
      type: 'POST',
      data: JSON.stringify(message), // message is an object with properties username, text, roomname
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.log('chatterbox: Failed to post message', error)
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};