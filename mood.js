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
    getRandomEffect : function() {
      var notifications = ['scale', 'slide', 'genie', 'jelly', 'flip', 'bouncyflip', 'stackslide'];
      var number = Math.floor(Math.random()*7+1);
      return notifications[number];
    },
    incrementSessionKey: function(key) {
      Session.set(key, Session.get(key) +1);
      var effectName = this.getRandomEffect();
      sAlert.success('Thanks for voting!', {timeout: 2000, position: 'bottom-right', effect: effectName});
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