if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.status.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.moodsInCircles.events( {
    'click svg': function () {
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
