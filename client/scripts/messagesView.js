var MessagesView = {

  $chats: $('#chats'),
  messageTemplate: MessageView.render, //save template function

  initialize: function() {
  },

  render: function() {
    //Messages object
    /*objectID
      username
      text
      roomname
      createdAt
       updatedAt*/
    this.$chats.empty();
    Messages.forEach(msg => {
      var {username, text, roomname, createdAt} = msg;

      if (roomname === App.roomname) {
        username = this.checkXSS(username);
        text = this.checkXSS(text);
        this.$chats.append(this.messageTemplate({username:username, text:text, createdAt:createdAt}));
      }
    });
  },

  checkXSS(text){
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
};
