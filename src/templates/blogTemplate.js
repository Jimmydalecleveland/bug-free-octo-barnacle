import React from 'react';
import styled from 'react-emotion';
import Button from '../components/Button';

export default function Template({
  data, // this prop will be injected by the GraphQL query below
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post
  const { frontmatter, html } = markdownRemark;

  return (
    <BlogPost className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <Button text="Close">Close</Button>
        <Button text="Open" primary>
          I Agree!
        </Button>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </BlogPost>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

const BlogPost = styled('section')`
  color: #444;

  img {
    max-width: 100%;
  }
`;
