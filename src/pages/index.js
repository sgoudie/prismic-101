import React from "react"
import { graphql } from "gatsby"
import Nav from '../components/Nav'

const Post = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  return (
    <React.Fragment>
      <Nav />
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query HomepageQuery {
    prismicHomepage {
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