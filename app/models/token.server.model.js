'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Token Schema
 */
var TokenSchema = new Schema({
	// Token model fields   
	value: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true }
});

mongoose.model('Token', TokenSchema);
