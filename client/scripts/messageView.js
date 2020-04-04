var MessageView = {

  // apply template with object with key/value pairs
  //onclick="Friends.toggleStatus(event)"
  render: _.template(`
      <div class="chat">
        <div class="username"><%=username%></div>
        <div><%=createdAt%></div>
        <div><%=text%></div>
      </div>
    `)

};