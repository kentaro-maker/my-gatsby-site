import * as React from 'react'
import Layout from '../layouts/layout'
import { graphql, PageProps } from 'gatsby'
import Seo from '../components/seo'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

// export const query = graphql`
//   query BlogPage {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `

export const query = graphql`
  query BlogPage {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes{
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage