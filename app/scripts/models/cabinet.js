/**
 * A cabinet, contains drawers and shows layout
 * @namespace bins.Models
 * @class Cabinet
 * @constructor
 * @extends {Backbone.Model}
 */
bins.Models.Cabinet = Backbone.Model.extend({
  defaults: function(){
    return {
      drawers: new bins.cabinetDrawers,
      rows: 1
    }
  }
});
