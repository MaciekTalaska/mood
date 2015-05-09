if (Meteor.isClient) {
  Session.setDefault('red', 0);
  Session.setDefault('orange', 0)
  Session.setDefault('yellow', 0);
  Session.setDefault('green', 0);

  Template.status.helpers({
    red: function() {
      return Session.get('red');
    },
    orange: function() {
      return Session.get('orange');
    },
    yellow: function() {
      return Session.get('yellow');
    },
    green: function() {
      return Session.get('green');
    }
  });

  Helpers = {
    incrementSessionKey: function(key) {
      Session.set(key, Session.get(key) +1);
    }
  }
  
  var externalFunction = function(mood) {
      Session.set('green', Session.get('green') +1);
  };
  
  Template.moodsInCircles.events( {
    'click circle': function(e) {
      var moodType = e.target.id;
      
      if (moodType === "moodGreen") {
        Helpers.incrementSessionKey("green");
      }
      if (moodType === "moodYellow") {
        Helpers.incrementSessionKey("yellow");
      }
      if (moodType === "moodOrange") {
        Helpers.incrementSessionKey("orange");
      }
      if (moodType === "moodRed") {
        Helpers.incrementSessionKey("red");
      }
  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}