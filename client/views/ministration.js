var ctrl = new GestaoIgrejas.MinistrationController();

Template.GestaoIgrejas_ministration.helpers({

  listMinistration: function () {
		return ctrl.index().listMinistration;
	}

});

Template.GestaoIgrejas_ministration.events({
  'click #add': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_ministration_insert"});
  },

  "click #edit": function(e, template) {
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_ministration_edit", data:this});
  },

  "click #remove": function(e, template) {
    Meteor.call("removeMinistration", this._id );
  }

});

Template.GestaoIgrejas_ministration_insert.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_ministration"});
  }

});

Template.GestaoIgrejas_ministration_edit.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_ministration"});
  }
});
