/**
 * A cabinet, contains drawers and shows layout
 * @namespace bins.Models
 * @class Cabinet
 * @module bins
 * @submodule Models
 * @constructor
 * @extends {Backbone.Model}
 */
bins.Models.Cabinet = Backbone.Model.extend({
  defaults: function(){
    return {
      drawers: new bins.Collections.cabinetDrawers,
      width: 5,
      label: null,
      description: null
    }
  },

  clearSelection: function(){
    this.set('selected',{});
  },

  selectOne: function(id){
    this.clearSelection();
    this.selectId(id);
  },
  selectId: function(id){
    this.get('selected')[id] = "selected";
  }
});
