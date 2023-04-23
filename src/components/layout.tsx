import React, { FC } from 'react'

import './layout.css'

interface ISiteLayoutProps {
  title?: string
  pageId?: string
}

const SiteLayout: FC<ISiteLayoutProps> = ({ children, title, pageId }) => {
  const headerTitle = title ?? 'Assignment 5 - Gatsby | Ioannis'

  return (
    <div id="app">
      <header>
        <div className="container">
          <h1>{headerTitle}</h1>

          <section className={`navigation ${ pageId }`}>
            <div className="spacer">
              <div>&nbsp;</div>
            </div>
            <div className="link">
              <a href="/">Assignment Home</a>
            </div>
          </section>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>This work is part of CSCI E-114, Web application development with Jamstack, Harvard Extension School</p>
      </footer>
    </div>
  )
}

export default SiteLayout
