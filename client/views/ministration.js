var ctrl = new GestaoIgrejas.MinistrationController();

Template.GestaoIgrejas_igreja.helpers({

  listMinistration: function () {
		return ctrl.index().listMinistration;
	}

});
