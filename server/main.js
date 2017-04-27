import { Meteor } from 'meteor/meteor';

//Colections
import { Pages } from '../imports/collections/pages';
import { Stories } from '../imports/collections/stories';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('pages', function () {
    return Pages.find({ admins: this.userId});
  });

  Meteor.publish('stories', function () {
    return Stories.find({});
  });

});
