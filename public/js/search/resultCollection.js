define(function(){
	var ResultCollection = Backbone.Collection.extend({
		url: "/search",
		initialize: function(){
			_.bindAll(this);
		},

		search: function(tags){
			return this.fetch({
				method: "POST",
				data: {
					tags: tags
				}
			});
		}
	});

	return ResultCollection;
});
