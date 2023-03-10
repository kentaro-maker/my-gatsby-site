import * as React from 'react'
import Layout from '../../layouts/layout'
import { graphql, PageProps, Link } from 'gatsby'
import Seo from '../../components/seo'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
             <h2>
              <Link to={`/blog/${node.frontmatter?.slug}`}>
                {node.frontmatter?.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter?.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

// export const query = graphql`
//   query BlogPage {
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//       nodes{
//         name
//       }
//     }
//   }
// `

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage