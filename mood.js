if (Meteor.isClient) {
  Session.setDefault('moodRed', 0);
  Session.setDefault('moodOrange', 0)
  Session.setDefault('moodYellow', 0);
  Session.setDefault('moodGreen', 0);

  Template.status.helpers({
    red: function() {
      return Session.get('moodRed');
    },
    orange: function() {
      return Session.get('moodOrange');
    },
    yellow: function() {
      return Session.get('moodYellow');
    },
    green: function() {
      return Session.get('moodGreen');
    }
  });

  Helpers = {
    incrementSessionKey: function(key) {
      Session.set(key, Session.get(key) +1);
      sAlert.success('Thanks for voting!', {timeout: 2000});
    }
  }
  
  Template.moodsInCircles.events( {
    'click circle': function(e) {
      var moodType = e.target.id;

      if (moodType === null || !moodType.startsWith("mood")) {
          return;
      }
      Helpers.incrementSessionKey(moodType);
  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}