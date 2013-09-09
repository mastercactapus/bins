define(function(){
	var Component = Backbone.Model.extend({
		urlRoot: "/components",
		idAttribute: "_id",

		defaults: function(){
			return {
				title: "ComponentName",
				type: "ComponentType",
				location: {
					name: "UnknownCabinet",
					drawer: "1x1 of 1x1"
				},
				tags:[],
				specs:[]
			}
		},

		initialize: function(){
			_.bindAll(this);
			this.listenTo(this,"change",_.throttle(this._doSave,2000));

			this.doSave = _.throttle(this._doSave,2000);
		},
		_doSave: function(){
			this.save({silent:true});
		},

		new: function(id){
			this.set(this.defaults(),{silent:true});
			if (id){
				this.set("_id",id,{silent:true});
				this.fetch();
			}
		},

		addSpec: function(label,value) {
			this.get("specs").push({
				label: label||"newSpec",
				value: value||"value"
			});
			this.trigger("change change:specs");
		},
		moveSpecUp: function(idx){
			if (idx <= 0) return;
			var specs = this.get("specs");

			var old = specs[idx-1];
			specs[idx-1] = specs[idx];
			specs[idx] = old;

			this.trigger("change change:specs");
		},
		moveSpecDown: function(idx){
			var specs = this.get("specs");
			if (idx >= specs.length-1) return;

			var old = specs[idx+1];
			specs[idx+1] = specs[idx];
			specs[idx] = old;

			this.trigger("change change:specs");
		},
		removeSpec: function(idx){
			this.get("specs").splice(idx,1);
			this.trigger("change change:specs");
		}
	});

	return Component;
})