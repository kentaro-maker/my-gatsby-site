import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

import Layout from '../../layouts/layout'
import Seo from '../../components/seo'


const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => {
  const image = getImage(data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData ?? null)

  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title}>
      <p>Posted: {data.mdx?.frontmatter?.date}</p>
      {image ? (
        <GatsbyImage
        image={image}
        alt={data.mdx?.frontmatter?.hero_image_alt ?? ''}
        />
      ): null }
      <p>
        Photo Credit:{" "}
        <a href={data.mdx?.frontmatter?.hero_image_credit_link ?? undefined}>
          {data.mdx?.frontmatter?.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query BlogPost ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query BlogPost ($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//       }
//     }
//   }
// `

export const Head = ({ data }: PageProps<Queries.BlogPostQuery>) => <Seo title={data.mdx?.frontmatter?.title} />

export default BlogPost