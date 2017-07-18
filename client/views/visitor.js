Template.GestaoIgrejas_visitor.helpers({

  listVisitors: function () {
		return Visitor.find({});
	},

  getYear : function() {
    return (new moment().format('YYYY') - moment(this.dateOfBirth).format('YYYY'));
  },

  getVisitation : function() {
    return moment(this.visitation).format('DD/MM/YYYY');
  },

  getFirstContact : function() {
    if(this.firstContact) {
      return "SIM";
    } else {
      return "NÃO";
    }
  }

});

Template.GestaoIgrejas_visitor.events({
  'click #add': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_visitor_insert"});
  },

  "click #edit": function(e, template) {
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_visitor_edit", data:this});
  },

  "click #remove": function(e, template) {
    Meteor.call("removeVisitor", this._id );
  }

});

Template.GestaoIgrejas_visitor_insert.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_visitor"});
  }
});

Template.GestaoIgrejas_visitor_edit.events({
  'click #back': function(){
    BlazeLayout.render('meteoris_themeAdminMain', {content: "GestaoIgrejas_visitor"});
  }
});
