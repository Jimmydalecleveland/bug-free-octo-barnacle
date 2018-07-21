import React from 'react';
import styled from 'react-emotion';
import Button from '../components/Button';

const htmlType = (html, isDangerous) =>
  isDangerous ? (
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <div className="blog-post-content">{html}</div>
  );

const Blog = ({ title, date, html, isDangerous = false }) => {
  return (
    <BlogWrapper className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <Button>Close</Button>
        <Button primary>I Agree!</Button>
        {htmlType(html, isDangerous)}
      </div>
    </BlogWrapper>
  );
};

const BlogWrapper = styled('section')`
  color: #444;

  img {
    max-width: 800px;
    width: 100%;
  }
`;

export default Blog;
