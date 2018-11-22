import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'

const Nav = ({ className }) => (
  <StaticQuery
    query={graphql`
      query NavQuery{
        prismicMenu {
          id
          data {
            menu_title {
              text
            }
            menu_links {
              link {
                id
                url
              }
              link_label {
                text
              }
            }
          }
        }
      }
    `}
    render={data => {
      const items = data.prismicMenu.data.menu_links
      console.log(items)
      return (
      <ul className={className}>
        <p>Menu</p>
        {items && items.map(({ link_label, link }) => link.url !== '/undefined' && (
          <li key={link.id}>
            <Link to={link.url}>
              {link_label.text}
            </Link>
          </li>
        ))}
      </ul>
    )}}
  />
)

export default Nav