var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //$button.click();
    this.$select.change((event) => {
      App.roomname = event.target.value;
      MessagesView.render();
    });
  },

  render: function() {
    /*
    $.each(Rooms, function(index, value) {
      this.$select.append($("<option></option>")
      .attr("room", index)
      .text(value));
    });
    */

    App.roomname = Rooms[0];
    for (var i=0; i<Rooms.length; i++) {
      var $options = $("<option></option>").attr("room", i).text(Rooms[i]);
      this.$select.append($options);
    }
  }

};
/*

https://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection
.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
*/