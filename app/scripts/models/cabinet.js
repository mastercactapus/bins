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
      id:0,
      drawers: new bins.Collections.cabinetDrawers,
      width: 5,
      label: null,
      selected: null
    }
  }
});
