/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string',
            index: true,
            notNull: true },
    address: { type: 'string',
               notNull: true },
    time_start: { type: 'datetime',
                  notNull: true },
    time_end: { type: 'datetime' },

    user_id: {
      model: 'user',
      index: true,
      notNull: true
    }
  }
};

