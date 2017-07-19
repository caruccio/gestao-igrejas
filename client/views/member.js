Template.GestaoIgrejas_member.helpers({

  listMembers: function () {
		return Member.find({});
	},

  getAge : function() {
    return (new moment().format('YYYY') - moment(this.dateOfBirth).format('YYYY'));
  },

  getRegister : function() {
    return moment(this.register).format('DD/MM/YYYY');
  }

});

Template.GestaoIgrejas_member.events({
  'click #add': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_member_insert"});
  },

  "click #edit": function(e, template) {
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_member_edit", data:this});
  },

  "click #remove": function(e, template) {
    Meteor.call("removeMember", this._id );
  }

});

Template.GestaoIgrejas_member_insert.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_member"});
  }
});

Template.GestaoIgrejas_member_edit.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_member"});
  }
});
