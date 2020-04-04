var MessagesView = {

  $chats: $('#chats'),
  messageTemplate: MessageView.render, //save template function

  initialize: function() {
  },

  renderMessage: function(msg){
    var {username, text, roomname, createdAt} = msg;
      if (roomname === App.roomname) {
        if (username === undefined) {
          return;
        }
        text = (!text) ? '' : text;
        text = this.checkXSS(text);
        username = this.checkXSS(username);
        this.$chats.append(this.messageTemplate({username:username, text:text, createdAt:createdAt}));
      }
  },

  render: function() {
    this.$chats.empty();
    Messages.storage.forEach(msg => this.renderMessage(msg));
    $('.username').on('click', Friends.toggleStatus);
  },

  checkXSS(text){
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
};
