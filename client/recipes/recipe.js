/**
 * Created by Nathan.Mead on 12/14/2015.
 */

Template.Recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
      console.log('menu item toggled');
  }
});
