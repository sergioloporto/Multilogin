import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from './footer';

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="all-layout p-0">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`}  />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
