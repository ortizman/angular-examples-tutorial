var iabRef = null;

function loadStopCallBack() {
  navigator.splashscreen.hide();
  if (iabRef !== undefined) {
    setTimeout(function () {
      iabRef.show();
    }, 750);
  }
}

var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      iabRef = window.open(encodeURI('http://google.com'), '_blank',
      'location=yes,zoom=no,hidden=yes,clearcache=yes,clearsessioncache=yes');
      iabRef.addEventListener('loadstop', loadStopCallBack);
    },

};

app.initialize();
