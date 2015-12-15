/**
 * Created by Nathan.Mead on 12/14/2015.
 */

Template.Recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
      console.log('menu item toggled');
  },
  'click .fa-trash' : function(){
    Meteor.call('deleteRecipe', this._id );
  },
  'click .fa-pencil' : function(){
    Session.set('editMode', !Session.get('editMode'));
  }
});

Template.Recipe.helpers({
  updateRecipeId: function(){
    return this._id;
  }
});