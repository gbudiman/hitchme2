/**
 * Step.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    trip_id: {
      model: 'trip',
      index: true,
      notNull: true
    },

    lat: {
      type: 'float',
      notNull: true
    },

    lng: {
      type: 'float',
      notNull: true
    },

    lat_e6: {
      type: 'integer',
      index: true,
      notNull: true
    },

    lng_e6: {
      type: 'integer',
      index: true,
      notNull: true
    }
  }
};

