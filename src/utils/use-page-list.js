import { graphql, useStaticQuery } from 'gatsby';

export const usePageList = () => {
  const getPages = graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/pages/" }
          frontmatter: { slug: { ne: "/" } }
        }
      ) {
        nodes {
          frontmatter {
            title
            description
            slug
          }
        }
      }
    }
  `;
  return useStaticQuery(getPages).allMarkdownRemark.nodes.map(
    node => node.frontmatter,
  );
};
