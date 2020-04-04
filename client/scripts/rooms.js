var Rooms = {

  storage: [],

  add: function(){
    var newRoom = prompt("Please enter new Room Name:", "Lobby");
      if (newRoom !== null && newRoom !== "") {
        if (newRoom !== undefined && newRoom !== '' && newRoom !== null) {
          this.storage.push(newRoom);
          RoomsView.renderRoom(newRoom, this.storage.length);
          $(`#rooms select option:contains(${App.roomname})`).attr('selected', '');
          App.roomname = newRoom;
          $(`#rooms select option:contains(${App.roomname})`).attr('selected', 'selected');
          MessagesView.render();
          console.log($(`#rooms select option:contains(${App.roomname})`));
        }
      }
  }


};