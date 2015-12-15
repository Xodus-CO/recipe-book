/**
 * Created by Nathan.Mead on 12/14/2015.
 */

Template.Recipes.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');
  });
});

Template.Recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});
