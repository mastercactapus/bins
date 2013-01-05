/**
 * Collection of all cabinets
 * @namespace bins.Collections
 * @class Cabinets
 * @module bins
 * @submodule Collections
 * @constructor
 * @extends {Backbone.Collection}
 */
bins.Collections.Cabinets = Backbone.Collection.extend({
  defaults: {model: bins.Cabinet}
});
