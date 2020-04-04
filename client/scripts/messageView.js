var MessageView = {

  // apply template with object with key/value pairs
  render: _.template(`
      <div class="chat">
        <div class="username"><%=username%></div>
        <div><%=text%></div>
      </div>
    `)

};