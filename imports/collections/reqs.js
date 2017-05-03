import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'reqs.insert': function {
    console.log('here');
  }
});

export const Reqs = new Mongo.Collection('reqs'); 
