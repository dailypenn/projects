import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import Img from "gatsby-image"
import { SectionHeader, Title, Author, VerticalCol } from "./shared"
import s from 'styled-components'

import { FUTURA_REGULAR } from "../../../utils/font"

const SpacedRow = s(Row)`
  margin-top: 1vw;
`

const EditorTitle = s.h1`
  ${FUTURA_REGULAR}
  color: #1500FF;
  font-size: .75em;
  margin-top: 1vw;
  margin-bottom: -1vw;
`

const HotTakes = () => {
  const { biden, melania, harris, whiteHouse } = useStaticQuery(graphql`
    query {
      biden: file(relativePath: {eq: "biden.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      melania: file(relativePath: {eq: "free-melania.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      harris: file(relativePath: {eq: "harris.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      whiteHouse: file(relativePath: {eq: "white-house.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)
  return <>
    <SectionHeader>HOT TAKES</SectionHeader>
    <Container>
      <Row>
        <Col>
          <Row>
            <Col >
              <Img fluid={melania.childImageSharp.fluid} />
            </Col>
            <VerticalCol >
              <Title left>Why We Don't Need to #FreeMelania</Title>
              <Author left>BY KIRA WANG</Author>
            </VerticalCol>
          </Row>
          <SpacedRow>
            <Col >
              <Img fluid={harris.childImageSharp.fluid} />
            </Col>
            <VerticalCol >
              <Title left>Why Are We Still Talking About Kamala Harris's Outfits?</Title>
              <Author left>BY EMILY WHITE</Author>
            </VerticalCol>
          </SpacedRow>
          <SpacedRow>
            <Col >
              <Img fluid={biden.childImageSharp.fluid} />
            </Col>
            <VerticalCol>
              <Title left>Biden Won- Now What?</Title>
              <Author left>BY HANNAH YUSUF</Author>
            </VerticalCol>
          </SpacedRow>
        </Col>
        <Col >
          <Img fluid={whiteHouse.childImageSharp.fluid} />
          <EditorTitle><b>LETTER FROM THE EDITOR</b></EditorTitle>
          <Title left larger>Hope, hangovers,<br />and some profanity.</Title>
          <Author left>BY KARIN HANANEL</Author>
        </Col>
      </Row>
    </Container>
  </>
}

export default HotTakes
