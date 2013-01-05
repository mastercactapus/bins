/**
 * Collection of all drawers
 * @namespace bins.Collections
 * @class Drawers
 * @module bins
 * @submodule Collections
 * @constructor
 * @extends {Backbone.Collection}
 */
bins.Collections.Drawers = Backbone.Collection.extend({
  defaults: {model: bins.Drawer}
});
