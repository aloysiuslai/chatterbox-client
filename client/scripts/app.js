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
    App.fetch(() => {
      RoomsView.render();
      MessagesView.render();
      App.roomname = Rooms.storage[0];
    });

  },

  send: function(message) {
    App.startSpinner();
    Parse.create(message, () => App.fetch(x => MessagesView.render()));
    App.stopSpinner();
  },

  fetch: function(callback = ()=>{}) {
    App.startSpinner();
    Parse.readAll((data) => {
      if (data !== undefined) {
        if (Array.isArray(data.results)) {

          Messages.storage = data.results; // an array of messages of 100, ordered from most recent at top
          Rooms.storage = []; //_.uniq(Messages.forEach(msg => msg.roomname));
          for (var i=0; i<Messages.storage.length; i++) {
            var roomname = Messages.storage[i].roomname;
            if (roomname !== "" && roomname !== undefined  && roomname !== null) {
              Rooms.storage.push(roomname);
            }
          }
          Rooms.storage = _.uniq(Rooms.storage);
          callback();
          console.log('fetched data successfully');
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
