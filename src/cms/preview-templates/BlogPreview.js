import React, { Component } from 'react';
import Blog from '../../pages/Blog';

class BlogPreview extends Component {
  render() {
    const { entry, widgetFor, widgetsFor, getAsset } = this.props;
    return (
      <Blog
        title={entry.getIn(['data', 'title'])}
        date={entry.getIn(['data', 'date'])}
        html={widgetFor('body')}
      />
    );
  }
}

export default BlogPreview;
