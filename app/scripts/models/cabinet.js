/**
 * A cabinet, contains drawers and shows layout
 * @namespace bins
 * @class Cabinet
 * @constructor
 * @extends {Backbone.Model}
 */
bins.Cabinet = Backbone.Model.extend({
  defaults: function(){
    return {
      drawers: new bins.cabinetDrawers,
      rows: 1
    }
  }
});
