import type { HeadFC, PageProps } from "gatsby"
import * as React from 'react'
import Seo from "../components/seo"
import Layout from "../layouts/layout"

// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="About Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}
// Step 3: Export your component
export default AboutPage

export const Head: HeadFC = () => <Seo title="About Me" />
