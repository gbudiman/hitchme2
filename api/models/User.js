/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fb_id: { type: 'string',
             index: true,
             notNull: true,
             unique: true },
    token: { type: 'string' },
    email: { type: 'string',
             unique: true,
             notNull: true },
    link: { type: 'string',
            unique: true,
            notNull: true },
    name: { type: 'string',
            notNull: true }
  }
};

