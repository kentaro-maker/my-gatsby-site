import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import useSiteMetadata from '../hooks/useSiteMetadata'

type LayoutProps =  {
  pageTitle: string | null | undefined
}

const Layout = ({ pageTitle, children }: React.PropsWithChildren<LayoutProps>) => {
  const siteMetadata = useSiteMetadata()

  return (
    <div className={container}>
      <header className={siteTitle}>{siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/say-hello" className={navLinkText}>
              SayHello
            </Link>
          </li>
           <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout