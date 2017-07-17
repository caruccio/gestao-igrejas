/**
create group routes, so every router has prefix GestaoIgrejas
*/
var groupRoutes = FlowRouter.group({
    prefix: '',
    name: '',
});
groupRoutes.route('/', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_siteIndex"});
    }
});

var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin',
    triggersEnter: [authenticating]
});

adminRoutes.route('/igreja', {
    action: function() {
      let church = Church.findOne({});
      BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_igreja", data: church });
    }
});

adminRoutes.route('/ministerios', {
    action: function() {
      BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_ministration"});
    }
});

function authenticating() {
    if (!Meteoris.Role.userIsInGroup("admin")){
        Meteoris.Flash.set("danger", "403 Unauthenticated");
        FlowRouter.go("/");
    }
}
