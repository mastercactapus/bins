/**
 * Datasheet object
 * @constructor
 * @namespace bins.Models
 * @class Datasheet
 * @extends {Backbone.Model}
 */
bins.Models.Datasheet = Backbone.Model.extend({
  defaults: function(){
    return {
      /**
       * The URL to retrieve the datasheet file
       * @property {String} url
       */
      url: "",

      /**
       * A short description/title for this datasheet
       * @property {String} title
       */
      title: "",

      /**
       * A longer description of this datasheet
       * @property {String} description
       */
      description: "",

      /**
       * Any tags to be added for search
       * @property {Array} tags
       */
      tags: []
    }
  }
});
