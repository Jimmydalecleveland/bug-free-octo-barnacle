import React from 'react';
import Blog from '../pages/Blog';

export default function Template({
  data, // this prop will be injected by the GraphQL query below
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post
  const { frontmatter, html } = markdownRemark;

  return (
    <Blog
      title={frontmatter.title}
      date={frontmatter.date}
      html={html}
      isDangerous={true}
    />
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
