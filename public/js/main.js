

dust.defer = Q.nbind(dust.render);

require(["./mainView"],
	function(MainView){

	var mainView = new MainView({
		el: $("#main")
	});

});

