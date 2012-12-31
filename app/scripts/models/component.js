/**
 * A basic electronic component
 * @namespace bins
 * @class  Component
 * @constructor
 * @extends {Backbone.Model}
 */
bins.Models.Component = Backbone.Model.extend({
  defaults: function(){
    return {

      /**
       * The ids of any describing datasheets
       * @property {Array} datasheet
       */
      datasheets: [],

      /**
       * The number of components available
       * @type {Number|String}
       * @property {Number|String} stock
       */
      stock: -1,

      /**
       * The category of the component (e.g. IC, Transistor, Resistor, LED)
       * @property {String} category
       * @required
       */
      category: "LED",

      /**
       * The subcategory of the component (e.g. Red, Green, Blue)
       * @property {String} subcategory
       * @required
       */
      subcategory: "Red",

      /**
       * The model if applicable
       * @property {String} model
       * @optional
       */
      model: null,

      /**
       * Description of the component
       * @property {String} description
       * @required
       */
      description: "90 degree red led, red lens",

      /**
       * Additional tags (for searching)
       * @property {Array} tags
       * @optional
       */
      tags: [],

      /**
       * Any image URLs if available
       * @property {String} image
       */
      images: [],

      /**
       * The cabinet number/id this component is stored in
       * @property {Number} cabinet
       */
      cabinet: -1,

      /**
       * The drawer number/id this component is stored in
       * @property {Number} drawer
       */
      drawer: -1,

      /**
       * The slot number/id this component is stored in
       * @property {Number} slot
       */
      slot: -1

    }
  }
});
