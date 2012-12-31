  /**
   * The collection of all datasheets
   * @constructor
   * @extends {Backbone.Collection}
   * @class  datasheetDB
   * @namespace bins.Collections
   */
bins.Collections.datasheetDB = Backbone.Collection.extend({
  defaults: {model: bins.Datasheet}
});
