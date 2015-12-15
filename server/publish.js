/**
 * Created by Nathan.Mead on 12/14/2015.
 */

Meteor.publish('recipes', function(){
    return Recipes.find({author: this.userId})
});