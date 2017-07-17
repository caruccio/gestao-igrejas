Namespace('GestaoIgrejas.MinistrationController');


GestaoIgrejas.MinistrationController = Meteoris.Controller.extend({

	constructor : function() {

	},

	index: function() {
		return {
			listMinistration: this.getList()
		};
	},

	getList: function(){
		return Ministration.find({});
	}

});
