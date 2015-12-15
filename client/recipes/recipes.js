/**
 * Created by Nathan.Mead on 12/14/2015.
 */

Meteor.subscribe('recipes');

Template.Recipes.helpers({
    recipes:()=> {
        return Recipes.find({});
    }
});