/**
 * Created by Nathan.Mead on 12/14/2015.
 */

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc) {
    //if you are signed in, you are allowed to insert a recipe
    return !!userId;
  }
})

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  desc: {
    type: String,
    label: 'Description'
  },
  author: {
    type: String,
    label: 'Author',
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Recipes.attachSchema(RecipeSchema);
