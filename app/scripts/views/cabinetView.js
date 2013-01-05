/**
 * View of a single cabinet.
 * Can render in whatever size, drawers are sized to fit based on
 * cabinet width and drawer count.
 * @module bins
 * @submodule Views
 * @namespace bins.Views
 * @class cabinetView
 * @constructor
 * @extends {Backbone.View}
 */
bins.Views.cabinetView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model,"change",this.render);
  },
  render: function() {
    var self = this;
    dust.render("cabinet", this.model.toJSON(), function(err, output){
      self.$el.html(output);
    });
  }
});
