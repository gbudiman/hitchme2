/**
 * Passenger.js
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

    driver_id: {
      model: 'user',
      index: true,
      notNull: true
    },

    passenger_id: {
      model: 'user',
      index: true,
      notNull: true
    },

    address: {
      type: 'string',
      notNull: true
    },

    time: {
      type: 'datetime',
      notNull: true
    }
  }
};

