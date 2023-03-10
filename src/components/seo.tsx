import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

type SeoProps = {
  title: string | undefined | null
}

const Seo = ({ title }: SeoProps) => {
  const siteMetadata = useSiteMetadata()

  return (
    <title>{title} | {siteMetadata.title}</title>
  )
}

export default Seo