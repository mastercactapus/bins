
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
    Cabinets   = new bins.Collections.Cabinets;
    Drawers    = new bins.Collections.Drawers;
    Components = new bins.Collections.Components;
    Datasheets = new bins.Collections.Datasheets;


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
