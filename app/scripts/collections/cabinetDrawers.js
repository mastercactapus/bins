/**
 * Collection of drawers for a cabinet
 * @namespace bins
 * @class cabinetDrawers
 * @constructor
 * @extends {Backbone.Collection}
 */
bins.cabinetDrawers = Backbone.Collection.extend({
  defaults: {model: bins.Drawer}
});