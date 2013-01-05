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
      height: 4,
      width: 5,
      label: null,
      description: null
    }
  },
  initialize: function() {
    this.listenTo(this.get('drawers'), 'add', this.addDrawer);
    this.listenTo(this.get('drawers'), 'reset', this.addAllDrawers);
  },
  addDrawer: function(drawer) {
    var view = new drawerView()
  },
  addAllDrawers: function() {
    this.get('drawers').each(this.addDrawer);
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
