Namespace('GestaoIgrejas.SiteController');


GestaoIgrejas.SiteController = Meteoris.Controller.extend({

	constructor : function() {
		Session.setDefault('counter', 0);
	},

	index: function() {
		return {
			counter: this.getCounter(),
			myName: "Daniel Pinna",
			myHobby: "Codificar projetos..."
		};
	},

	getCounter: function(){
		return Session.get("counter");
	},

	setCounter: function(counter){
		Session.set('counter', this.getCounter() + 1 );
	}

});
