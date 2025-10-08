import React from 'react'
import { Helmet } from "react-helmet";

const HelmetPage = ({helmetDetails}) => {
    console.log(helmetDetails, "hel")
  return (
      <>
      <Helmet>
        <title>{helmetDetails?.metaTitle}</title>
        <meta name="description" content={helmetDetails?.metaDescription} />
      </Helmet>
    </>
  )
}

export default HelmetPage
