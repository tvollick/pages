import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Stories } from '../../../imports/collections/stories';

class StoryRead extends React.Component {


  renderStory () {
    if (this.props.story) {

      const { title, content } = this.props.story;

      return (
        <div className="col-md-8 col-md-offset-2">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: content}} />

        </div>
      );

    }
  }

  render () {
    return (
      <div>
        {this.renderStory()}
      </div>
    )
  }
}


export default createContainer ((props) => {
  const { storyId } = props.match.params;
  Meteor.subscribe('stories');

  return { story: Stories.findOne(storyId)};

}, StoryRead);
