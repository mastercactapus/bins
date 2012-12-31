  /**
   * The collection of all datasheets
   * @constructor
   * @extends {Backbone.Collection}
   * @class  datasheetDB
   * @namespace bins
   */
bins.datasheetDB = Backbone.Collection.extend({
  defaults: {model: bins.Datasheet}
});
