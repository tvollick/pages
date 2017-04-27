import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'pages.insert': function () {
    return Pages.insert({
      title: '', // string
      admins: [this.userId], // array of ints
      readers: [], // array of ints
      writers: [], // could be same as readers
      privacy: 1, // int ? 1='private', 2='public'
      createdAt: new Date() // timestamp
    });
  },

  'pages.remove': function (page) {
    return Pages.remove(page);
  }
});

export const Pages = new Mongo.Collection('bins');
