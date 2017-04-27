import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Stories } from '../../../imports/collections/stories';

class StoryList extends React.Component {

  onStoryRemove (story) {
    Meteor.call('stories.remove', story);
  }

  renderList () {
    console.log(this.props.stories);
    return this.props.stories.map(story => {
      return(
        <li
          key={story._id}
          className="list-group-item clearfix"
          >
          Story - {story._id}

          <button
            className="btn btn-danger pull-right"
            onClick={() => this.onStoryRemove(story)}
          >
            Remove Story
          </button>

          <Link
            to={`/story_edit/${story._id}`}
            className="btn btn-primary pull-right">
            Edit Story
          </Link>

          <Link
            to={`/story/${story._id}`}
            className="btn btn-default pull-right"
          >
            View Story
          </Link>

        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
    Meteor.subscribe('stories');

    console.log(Stories.find({}).fetch());

    return { stories: Stories.find({}).fetch() };
}, StoryList);