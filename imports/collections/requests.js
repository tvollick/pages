import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'requests.insert': function (data) {
    console.log('here'); 
    return Requests.insert({
      user: this.userId,
      page: data.page,
      createdAt: new Date()
    });
  }
});

export const Requests = new Mongo.Collection('requests');
