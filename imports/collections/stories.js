import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'stories.insert': function () {
    return Stories.insert({
      title: '', // string
      // thumbnail: 101, // int(id) or string (url)
      gallery: [], // array of ints or strings
      content: '', // string
      excerpt: '', // string (short clip to show on feed. )
      author: this.userId, // int (creator)
      location: '', // string (optional)
      collaborators: [], // array of ints
      page: [], // int (page/group that story belongs to);
      // ups: 14, // int (likes)
      status: 1, // int 1='draft', 2='published'
      //time: 1002, // int (reading time?) FUTURE
      views: 0,
      createdAt: new Date()  // timestamp
    });
  },

  'stories.remove': function (story) {
    return Stories.remove(story)
  }

});

export const Stories = new Mongo.Collection('stories');
