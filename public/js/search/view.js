define(["./resultCollection"],function(ResultCollection){
	var SearchView = Backbone.View.extend({
		//setup
		events: {
			"change #searchbox": "onSearchboxChange",
			"keypress #searchbox": "onSearchboxChange",
			"click [rel=select-component]": "onSelectComponentClick"
		},

		//backbone
		initialize: function(){
			_.bindAll(this);

			this.$results = this.$("#search-results");
			this.$sbox = this.$("#searchbox");
			this.collection = new ResultCollection();

			this.listenTo(this.collection,"sync sort",this.renderResults);
			this.doSearch = _.throttle(this._doSearch,1000);
		},
		renderResults: function(){
			return dust.defer("searchResults",this.collection.toJSON())
			.then(function(html){
				this.$results.html(html);
			}.bind(this))
			.done();
		},
		_doSearch: function(){
			var query = this.$sbox.val();
			this.collection.search(query);
		},

		//events
		onSearchboxChange: function(evt){
			this.doSearch();
		},
		onSelectComponentClick: function(evt){
			var id = $(evt.target).closest("[data-id]").data("id");
			this.trigger("select-component",id);
		}
	});

	return SearchView;
})