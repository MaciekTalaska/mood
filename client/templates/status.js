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