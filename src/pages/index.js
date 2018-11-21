import React from "react"
import { graphql } from "gatsby"

const Post = ({ data: { prismicLandingPage } }) => {
  const { data } = prismicLandingPage
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query LandingQuery {
    prismicLandingPage {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`