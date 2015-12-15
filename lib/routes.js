/**
 * Created by Nathan.Mead on 12/14/2015.
 */

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

