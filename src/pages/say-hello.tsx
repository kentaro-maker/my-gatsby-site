// Step 1: Import React
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

import Greeting from '../components/greeting'
import Layout from '../layouts/layout'

const SayHello: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Saying Hello to Everyone">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <Greeting name="Megan" />
        <Greeting name="Obinna" />
        <Greeting name="Generosa" />
      </Layout>
    </main>
  )
}

export default SayHello

export const Head: HeadFC = () => <title>SayHello</title>
