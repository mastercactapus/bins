
/**
 * The bins parent class
 * @module bins
 */
window.bins = {

  /**
   * The Models submodule of bins
   * @module  bins
   * @submodule Models
   */
  Models: {},

  /**
   * The Collections submodule of bins
   * @module  bins
   * @submodule Collections
   */
  Collections: {},

  /**
   * The Views submodule of bins
   * @module  bins
   * @submodule Views
   */
  Views: {},

  /**
   * The Routers submodule of bins
   * @module  bins
   * @submodule Routers
   */
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    test();
    console.log('test mode launched');
  }
};
function test(){
  var drawers = new bins.Collections.cabinetDrawers;
  drawers.add(_.map(_.range(20),function(i){
    return new bins.Models.Drawer;
  }));
  cab = new bins.Models.Cabinet({"drawers": drawers});

  var cabV = new bins.Views.cabinetView({
    el: $("#content"),
    model: cab
  });

  cabV.render();
}
