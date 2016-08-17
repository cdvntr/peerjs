var win = function() {

  this.callbacks = [];
  
  this.postMessage = function(messageName) {
    if (this.callbacks.length) {
      events.forEach(function(event) {
        if (event instanceof Function) event({source: window, data: messageName});
      });
    }
  };
  
  this.addEventListener = function(eventName, cb) {
    if (eventName == "message")
      this.callbacks.push(cb);
  };

};

module.exports = new win();
