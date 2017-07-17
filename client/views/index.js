var ctrl = new GestaoIgrejas.SiteController();

Template.GestaoIgrejas_siteIndex.helpers({
	myName: function () {
		return ctrl.index().myName;
	},
	myHobby: function () {
		return ctrl.index().myHobby;
	},
	counter: function () {
  	return ctrl.index().counter++;
  }
});


Template.GestaoIgrejas_siteIndex.events({
    'click button': function () {
      ctrl.setCounter();
    }
});
