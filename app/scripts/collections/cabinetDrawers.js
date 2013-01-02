/**
 * Collection of drawers for a cabinet
 * @namespace bins.Collections
 * @class cabinetDrawers
 * @constructor
 * @extends {Backbone.Collection}
 */
bins.Collections.cabinetDrawers = Backbone.Collection.extend({
  defaults: {model: bins.Drawer}
});
