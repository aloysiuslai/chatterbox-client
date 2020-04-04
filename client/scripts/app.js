var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomname: '',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.fetch();

  },

  fetch: function(callback = ()=>{}) {
    App.startSpinner();
    Parse.readAll((data) => {
      // examine the response from the server request:
      // could data be undefined????
      if (data !== undefined) {
        if (Array.isArray(data.results)) {

          Messages = data.results; // an array of messages of 100, ordered from most recent at top
          Rooms = []; //_.uniq(Messages.forEach(msg => msg.roomname));
          for (var i=0; i<Messages.length; i++) {
            var roomname = Messages[i].roomname;
            if (roomname !== "" && roomname !== undefined  && roomname !== null) {
              Rooms.push(roomname);
            }
          }
          Rooms = _.uniq(Rooms);
          RoomsView.render();
          MessagesView.render();
          console.log('fetched data successfully');
          callback();
        }
      }
      App.stopSpinner()
    },
    function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
      App.stopSpinner()
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
