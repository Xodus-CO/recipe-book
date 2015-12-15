/**
 * Created by Nathan.Mead on 12/14/2015.
 */

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});
