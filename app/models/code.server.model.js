'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Code Schema
 */
var CodeSchema = new Schema({
	value: { type: String, required: true },
  redirectUri: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true }
});

mongoose.model('Code', CodeSchema);
