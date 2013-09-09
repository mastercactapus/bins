define(["./search/view", "./component/view", "./component/component"],
	function(SearchView, ComponentView, Component){

	var MainView = Backbone.View.extend({
		events: {
			"click #new-btn": "onNewClick"
		},
		initialize: function(){
			this.searchView = new SearchView({
				el: this.$("#search-pane")
			});
			this.componentView = new ComponentView({
				el: $("#component-pane"),
				model: new Component()
			});

			this.listenTo(this.searchView, "select-component", this.selectComponent);
		},
		onNewClick: function(evt){
			this.componentView.newComponent();
		},
		selectComponent: function(id){
			this.componentView.loadComponent(id);
		}
	});

	return MainView;
});
