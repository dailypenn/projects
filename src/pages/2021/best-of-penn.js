import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { Footer, NavBar } from '../../components/shared'
import BestOfPennCoverImg from '../../content/images/2021/best-of-penn/best-of-penn-cover-2020.png'
import { BackgroundWrapper } from '../../components/2021/best-of-penn/shared'
import TanBestOfPenn from '../../components/2021/best-of-penn/TanBestOfPenn.js'
import BlueBestOfPenn from '../../components/2021/best-of-penn/BlueBestOfPenn.js'

const NAVBAR_TITLES = {
  left: [
    { text: 'FOOD', link: 'food' },
    { text: 'DRINKS', link: 'drinks' },
    { text: 'ACTIVITIES', link: 'activities' },
  ],
  right: [
    { text: 'LIVING', link: 'living' },
    { text: 'BEAUTY', link: 'beauty' },
    { text: 'QUARANTINE', link: 'quarantine' },
  ],
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "best-of-penn-content.json" } }) {
        edges {
          node {
            childrenBestOfPennContentJson {
              section
              description
              items {
                address
                blurb
                category
                hours
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 1200, maxHeight: 900) {
                        ...GatsbyImageSharpFluid
                        src
                      }
                    }
                  }
                }
                place
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenBestOfPennContentJson: sections },
  } = data.allFile.edges[0]

  const [food, drinks, activities, living, beauty, quarantine] = sections

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Best of Penn" />
        <title>Best of Penn 2020 | The Daily Pennsylvanian</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="Best of Penn | The Daily Pennsylvanian"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn/911a0997-d5e4-44f9-a21c-b4641280f6fe.sized-1000x1000.png"
        />
        <meta property="og:description" content="Best of Penn" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.thedp.com/2021/best-of-penn"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best of Penn | The Daily Pennsylvanian"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn/911a0997-d5e4-44f9-a21c-b4641280f6fe.sized-1000x1000.png"
        />
        <meta name="twitter:description" content="Best of Penn" />
        <meta
          name="twitter:url"
          content="https://projects.thedp.com/2021/best-of-penn"
        />
        <meta name="twitter:site" content="@dailypenn"></meta>

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#000000"
        fontColor="#FFFFFF"
        img="/img/DP-Logo-Full-White.png"
      />
      <div>
        <img src={BestOfPennCoverImg} style={{ width: '100%' }} />
      </div>
      <BackgroundWrapper>
        <div id="food">
          <TanBestOfPenn section={food} colmd={4} />
        </div>
        <div id="drinks">
          <BlueBestOfPenn section={drinks} />
        </div>
        <div id="activities">
          <TanBestOfPenn section={activities} colmd={5} />
        </div>
        <div id="living">
          <TanBestOfPenn section={living} colmd={5} />
        </div>
        <div id="beauty">
          <TanBestOfPenn section={beauty} colmd={5} />
        </div>
        <div id="quarantine">
          <BlueBestOfPenn section={quarantine} marginBottom="3" />
        </div>
      </BackgroundWrapper>
      <Footer emoji="💖" bgColor="#000000" fontColor="#FFFFFF" year="2021" />
    </>
  )
}

export default IndexPage
