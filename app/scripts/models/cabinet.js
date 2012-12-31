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
      cols: 5,
      rows:4,
      description: "",
      selected:null
    }
  },

  /**
   * Generates a map of the drawer layout for templating
   * @return {Object} An object representing the current drawer layout
   */
  layout: function(){
    var self=this;
    var rows = _.map( _.range(self.get('rows')), function(y){
      var cols = _.map( _.range(self.get('cols')), function(x){
        var drawer_id = (y*self.get('cols')) + +x;
        return {
          width: (1/self.get('cols') * 100) + "%",
          id: drawer_id,
          selected: (self.get('selected') == drawer_id)
        }
      });
      return {
        height: (1/self.get('rows') * 100) + "%",
        cols: cols
      }
    });
    return {
      cabinet: self.id,
      rows: rows
    }
  }
});
