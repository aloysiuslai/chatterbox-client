var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    console.log('rooms', Rooms);
    this.$button.click(event => Rooms.add());
    this.$select.change((event) => {
      App.roomname = event.target.value;
      MessagesView.render();
    });
  },

  renderRoom: function(roomname, idx) {
    var $options = $("<option></option>").attr("room", idx ? idx : -1).text(roomname);
    this.$select.append($options);
  },

  render: function() {
    for (var i=0; i<Rooms.storage.length; i++) {
      this.renderRoom(Rooms.storage[i], i);
    }
  }
};
