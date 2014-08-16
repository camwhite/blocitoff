'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name:         {type: String},
  description:  {type: String},
  active:       {type: Boolean},
  created_at:   {type: Date},
  update_at:    {type: Date}
});

// Add created_at and updated_at values
TaskSchema.pre('save', function(next) {
  var now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('Task', TaskSchema);