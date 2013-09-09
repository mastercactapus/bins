define(["./component"], function(Component){
	var ComponentView = Backbone.View.extend({
		events: {
			"click [rel=add-spec]": "onAddSpecClick",
			"click [rel=remove-spec]": "onRemoveSpecClick",
			"click [rel=move-spec-up]": "onUpSpecClick",
			"click [rel=move-spec-down]": "onDownSpecClick",
			"input .specs dt": "onSpecLabelInput",
			"input .specs dl": "onSpecValueInput",
			"input [rel=title]": "onTitleInput",
			"input [rel=type]": "onTypeInput",
			"input [rel=location-name]": "onLocNameInput",
			"input [rel=location-drawer]": "onLocDrawerInput",
			"click .drawer": "onDrawerClick"

		},
		initialize: function(){
			_.bindAll(this);
			this.listenTo(this.model,"change",this.render);
		},
		render: function(){
			return dust.defer("componentInfo", this.model.toJSON())
			.then(function(html){
				this.$el.html(html);
				this.$cabinet = this.$(".cabinet");
			}.bind(this))
			.then(this.renderCabinet)
			.done();
		},
		renderCabinet: function(){
			var rx = /(\d+)x(\d+)\s+of\s+(\d+)x(\d+)/
			var loc = this.model.get("location");

			if (loc && loc.drawer) loc = loc.drawer

			var match = rx.exec(loc);

			var ctx = {};

			if (match) {
				ctx.lines = match[4];
				ctx.drawerWidth = (100/match[3])+"%";
				ctx.drawerHeight = (100/match[4])+"%";
				ctx.drawers = [];
				for (var y=1;y<=match[4];y++){
					for (var x=1;x<=match[3];x++){
						ctx.drawers.push({
							selected: y==match[2]&&x==match[1] ? "selected":"",
							drawerId: x+"x"+y
						});
					}
				}
			} else {
				ctx.drawerWidth = "100%";
				ctx.drawerHeight = "100%";
				ctx.drawers = [{
					selected: "selected",
					drawerId: "?"
				}];
			}

			return dust.defer("cabinet",dust.makeBase(ctx).push(this.model.toJSON()))
			.then(function(html){
				this.$cabinet.html(html);
			}.bind(this))
			.done();
		},

		loadComponent: function(id){
			this.model.stopListening();
			this.stopListening(this.model);
			this.model = new Component({
				_id: id
			});
			this.listenTo(this.model,"change",this.render);
			this.model.fetch();
		},
		newComponent: function(){
			//cleanup
			this.model.stopListening();
			this.stopListening(this.model);
			this.model = new Component();
			this.listenTo(this.model,"change",this.render);
			this.model.doSave();
		},
		evtVal: function(evt){
			var $target = $(evt.target);
			return $target.text().trim();
		},


		onDrawerClick: function(evt){
			var val = this.evtVal(evt);
			var loc = this.model.get("location");

			loc.drawer = loc.drawer.replace(/\d+x\d+ of |^/, val+" of ");
			this.model.trigger("change change:location");
		},
		onLocNameInput: function(evt){
			var val = this.evtVal(evt);
			this.model.get("location").name = val;
			this.model.doSave();
		},
		onLocDrawerInput: function(evt){
			var val = this.evtVal(evt);
			this.model.get("location").drawer = val;
			this.model.doSave();
			this.renderCabinet();
		},

		onTitleInput: function(evt){
			var $target = $(evt.target);
			var val = $target.text().trim();
			this.model.set("title",val,{silent:true});
			this.model.doSave();
		},
		onTypeInput: function(evt){
			var $target = $(evt.target);
			var val = $target.text().trim();
			this.model.set("type",val,{silent:true});
			this.model.doSave();
		},
		onSpecLabelInput: function(evt){
			var $target = $(evt.target);
			var idx = $target.closest("[data-idx]").data("idx");
			var val = $target.text().trim();
			this.model.get("specs")[idx].label=val;
			this.model.doSave();
		},
		onSpecValueInput: function(evt){
			var $target = $(evt.target);
			var idx = $target.closest("[data-idx]").data("idx");
			var val = $target.text().trim();
			this.model.get("specs")[idx].value=val;
			this.model.doSave();
		},
		onUpSpecClick: function(evt){
			var idx = $(evt.target).closest("[data-idx]").data("idx");
			this.model.moveSpecUp(idx);
		},
		onDownSpecClick: function(evt){
			var idx = $(evt.target).closest("[data-idx]").data("idx");
			this.model.moveSpecDown(idx);
		},
		onRemoveSpecClick: function(evt){
			var idx = $(evt.target).closest("[data-idx]").data("idx");
			this.model.removeSpec(idx);
		},
		onAddSpecClick: function(evt){
			this.model.addSpec();
		}
	})
	return ComponentView;
})