import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

const Sports = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "Sports.json"}}) {
          edges {
            node {
              childrenSportsJson{
                title
                description
                author
                link
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 1000, maxHeight: 600) {
                        ...GatsbyImageSharpFluid
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { node: { childrenSportsJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="sports">
            <WordWithLine word="SPORTS" lineColor="#7BA3D3"/>
            <div>Sports section here</div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Sports