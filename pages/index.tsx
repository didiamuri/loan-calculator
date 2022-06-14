import HeadSeo from '@components/HeadSeo'
import siteMetadata from '@data/siteMetadata'
import type { NextPage } from 'next'
import { Fragment } from 'react'

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeadSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={"Website"}
      />
      <div>Home</div>
    </Fragment>
  )
}

export default Home
