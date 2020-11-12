import React from 'react'
import s from 'styled-components'

import { Helmet } from 'react-helmet'
import { Col, Container, Row } from 'react-bootstrap'
import { DFPSlotsProvider, AdSlot } from 'react-dfp'

import {
  Card,
  CardContent,
  Header,
  Hero,
  Navbar
} from "../../../components/2020/housing-guide";

import Thumbnail from '../../../content/images/2020/housing-guide/hero.png'

import explainerArticle from '../../../content/json/2020/housing-guide/explainer.json'
import subletsArticle from '../../../content/json/2020/housing-guide/sublets.json'
import profileArticle from '../../../content/json/2020/housing-guide/profile.json'
import constructionArticle from '../../../content/json/2020/housing-guide/construction.json'
const WHITE = `#FFFFFF`;
const ORANGE = `#F29F4D`;
const LIGHT_MAGENTA = `#F9EDF4`;
const DARK_ORANGE = `#A56021`;
const BROWN = `#70380A`

const Metadata = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Housing Guide 2020 | The Daily Pennsylvanian</title>

    <meta property="og:title" content="Housing Guide 2020 | The Daily Pennsylvanian" />
    <meta property="og:image" content={Thumbnail} />
    <meta property="og:description" content="Your guide to living at Penn" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://projects.thedp.com/2020/housing-guide/" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Housing Guide 2020 | The Daily Pennsylvanian" />
    <meta name="twitter:image" content={Thumbnail} />
    <meta name="twitter:description" content="Your guide to living at Penn" />
    <meta name="twitter:url" content="https://projects.thedp.com/2020/housing-guide/" />
    <meta name="twitter:site" content="@dailypenn" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
  </Helmet>
)

const Section = s.section`
    padding-top: 60px;
    padding-bottom: 60px;
  ${({ background }) => background && `background-color: ${background}`}
`

const SpacedRow = s(Row)`
    margin-top: 50px;
`

// TODO: Extract out add component for DP usage
export default () => <>
  <Metadata />
  <Navbar />
  <Hero />
  <Section>
    <Container>
      <Card padding>
        <Row>
      <Header>Guide</Header>
        </Row>
    <Container>
        <SpacedRow>
          <Col>
          <Card>
            <CardContent
              {...explainerArticle}
              primary={BROWN}
              secondary={DARK_ORANGE}
            />
            </Card>
          </Col>
          <Col>
          {/* TODO: MORE ADS */}
          <div>Ad1</div>
          <div>Ad2</div>
        </Col>
      </SpacedRow>
    </Container>
  </Section>
  <Section background={LIGHT_MAGENTA}>
    <Container>
      <Row>
        <Header inverted>News</Header>
      </Row>
      <SpacedRow>
        <Col sm={12} md={6}>
          <Card>
            <CardContent
              {...subletsArticle}
              primary={DARK_PURPLE}
              secondary={LIGHT_PURPLE}
            />
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <CardContent
              {...profileArticle}
              primary={DARK_PURPLE}
              secondary={LIGHT_PURPLE}
            />
          </Card>
        </Col>
      </SpacedRow>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <CardContent
              {...constructionArticle}
              primary={DARK_PURPLE}
              secondary={LIGHT_PURPLE}
            />
          </Card>
        </Col>
        <Col md={12} md={6}>
          {/* TODO: MORE ADS */}
          <div>Ad1</div>
          <div>Ad2</div>
        </Col>
      </Row>
    </Container>
  </Section>

            <DFPSlotsProvider dfpNetworkId="12234093">
              <AdSlot adUnit="DP.com-Leaderboard" sizes={[[300, 200]]} />
            </DFPSlotsProvider>
          </Col>
        </SpacedRow>
      </Card>
    </Container>
  </Section>
</>;
