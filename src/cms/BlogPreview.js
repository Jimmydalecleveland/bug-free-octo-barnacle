import React, { Component } from 'react';
// import Button from './components/Button';

class BlogPreview extends Component {
  render() {
    const { entry, widgetFor, widgetsFor, getAsset } = this.props;
    console.log(entry.getIn(['data', 'title']));
    console.log(entry.getIn(['data', 'date']));
    console.log(widgetFor('date'));
    return (
      <div>
        <h1>{entry.getIn(['data', 'title'])}</h1>
        {widgetFor('date')}
      </div>
    );
  }
}

export default BlogPreview;
