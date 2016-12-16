/**
 * Trip.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_id: {
      model: 'user',
      index: true,
      notNull: true,
    },

    event_id: {
      model: 'event',
      index: true,
      notNull: true
    },

    encoded_polyline: {
      type: 'text',
      notNull: true
    },

    time_start: {
      type: 'datetime',
      notNull: true
    },

    space_passenger: {
      type: 'integer',
      notNull: true
    },

    space_cargo: {
      type: 'integer',
      notNull: true
    }
  }
};

