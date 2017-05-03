import { Meteor } from 'meteor/meteor';

//Mongo DB Collections
import { Pages } from '../imports/collections/pages';
import { Stories } from '../imports/collections/stories';
import { Requests } from '../imports/collections/requests'; 

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('pages', function () {
    return Pages.find({ readers: this.userId});
  });
  Meteor.publish('pages.search', function () {
    return Pages.find({});
  });

  Meteor.publish('stories', function () {
    return Stories.find({});
  });

  Meteor.publish('stories.author', function () {
    return Stories.find({author: this.userId});
  });

});
