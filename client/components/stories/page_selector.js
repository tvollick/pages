import React from 'react';

import Checkbox from '../forms/checkbox';

class PageSelector extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: []
    };
  }

  componentWillReveiveProps (next) {
    console.log('componentWillReveiveProps');
    const { checked } = next;
    this.setState({
      checked
    });
  }

  componentWillMount () {
    const {checked} = this.props;
    this.setState({
      checked
    });
  }

  toggleCheckbox (pageId) {
    const {checked} = this.state;
    const { passSelected } = this.props;
    if (checked.includes(pageId)) {
      // remove value from checked array
      const i = checked.indexOf(pageId);
      checked.splice(i, 1);
    } else {
      checked.push(pageId);
    }
    passSelected(checked);
  }

  pageIsChecked (pageId) {
    if (this.props.checked.includes(pageId)) {
      return true;
    } else {
      return false;
    }
  }

  renderSelector () {
    if (this.props.pages.length) {
      return this.props.pages.map(page => {
        return (
          <Checkbox
            key={`checkbox-${page._id}`}
            label={page.title}
            value={page._id}
            // handleCheckChange={this.toggleCheckbox.bind(this)}
            handleCheckChange={this.props.togglePageSelector}
            isChecked={this.pageIsChecked(page._id)}
          />
        );
      });
    }
  }

  render () {
    return (
      <div>
        <h4>
          Select pages to publish this story to.
        </h4>
        {this.renderSelector()}
      </div>
    );
  }

}

export default PageSelector;
