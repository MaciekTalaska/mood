if (Meteor.isClient) {
  /*
  Session.setDefault('moodRed', 0);
  Session.setDefault('moodOrange', 0)
  Session.setDefault('moodYellow', 0);
  Session.setDefault('moodGreen', 0);
  */
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}