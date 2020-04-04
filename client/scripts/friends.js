var Friends = {

  storage: {},

  toggleStatus: function(event) {
    var username = event.target.innerHTML;
    debugger;
    if (this.storage[username] === undefined) {
      this.storage[username] = 1;
      // this.storage.called = true;
    } else {
      delete this.storage[username];
    }
  }

};