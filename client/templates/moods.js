moodsHelpers = {
  getRandomEffect : function() {
    var notifications = ['scale', 'slide', 'genie', 'jelly', 'flip', 'bouncyflip', 'stackslide'];
    var number = Math.floor(Math.random()*7+1);
    return notifications[number];
  },
  notifyMoodInsertion : function() {
    var effectName = moodsHelpers.getRandomEffect();
    sAlert.success('Thanks for voting!', {timeout: 2000, position: 'bottom-right', effect: effectName});
  },
  storeMood: function(key) {
    var date = new Date();
    var mood = { 
      mood: key,
      date: date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate()
      };
    Moods.insert(mood);
  },
  processMood: function(key) {
    moodsHelpers.storeMood(key);
    moodsHelpers.notifyMoodInsertion();
  }
}
  
Template.moodsInCircles.events( {
  'click circle': function(e) {
    var moodType = e.target.id;

    if (moodType === null || !moodType.startsWith("mood")) {
      return;
    }
    moodsHelpers.processMood(moodType);
  }
});