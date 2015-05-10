Template.status.helpers({
  red: function() {
    return Moods.find({mood:"moodRed"}).count();
  },
  orange: function() {
    return Moods.find({mood:"moodOrange"}).count();
  },
  yellow: function() {
    return Moods.find({mood:"moodYellow"}).count();
  },
  green: function() {
    return Moods.find({mood:"moodGreen"}).count();
  }
});