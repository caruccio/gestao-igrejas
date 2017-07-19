Template.GestaoIgrejas_agenda.helpers({

  listEvents: function () {
		return Agenda.find({});
	},

  getDateOfEvent : function() {
    return moment(this.dateOfEvent).format('DD/MM/YYYY');
  }

});

Template.GestaoIgrejas_agenda.events({
  'click #add': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_agenda_insert"});
  },

  "click #edit": function(e, template) {
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_agenda_edit", data:this});
  },

  "click #remove": function(e, template) {
    Meteor.call("removeAgenda", this._id );
  }

});

Template.GestaoIgrejas_agenda_insert.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_agenda"});
  }
});

Template.GestaoIgrejas_agenda_edit.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_agenda"});
  }
});
