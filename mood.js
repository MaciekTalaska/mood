if (Meteor.isClient) {
  Session.setDefault('red', 0);
  Session.setDefault('yellow', 0);
  Session.setDefault('green', 0);

  Template.status.helpers({
    red: function() {
      return Session.get('red');
    },
    yellow: function() {
      return Session.get('yellow');
    },
    green: function() {
      return Session.get('green');
    }
  });

  Template.moodsInCircles.events( {
    'click circle': function(e) {
      var moodType = e.target.id;
      if (moodType === "moodGreen") {
        Session.set('green', Session.get('green') +1);
      }
      if (moodType === "moodYellow") {
        Session.set('yellow', Session.get('yellow') +1);
      }
      if (moodType === "moodRed") {
        Session.set('red', Session.get('red') +1);
      }
  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
