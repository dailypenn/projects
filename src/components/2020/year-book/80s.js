import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { ROBOTO_REGULAR } from '../../../utils/font'


const Header = s(Img)`
  margin: 100px 30px 10px 30px ;
  width: 35%;
  margin-right:0;
  margin-left: auto;
`

const SixtyHeader = s(Img)`
  width: 80%;
  margin: 0 60px;
`
const HeaderBackground = s.div`
  background-color: #E9338A;
`

const Body = s.div`
  padding-top: 50px;
  ${ROBOTO_REGULAR}
  font-size: 16px;
`

const SeventyColumn = s.div`
  padding-top: 50px;
  ${ROBOTO_REGULAR}
  background-color: #FFF8E8;
  font-size: 16px;
`

const Paragraph = s.div`
`

const FancyAuthor = s(Img)`
  width: 40%;
  margin: 10px 0;
`

const SmallImage = s(Img)`
  height: 195px;
  overflow: hidden;
`

const BigImage = s(Img)`
  height: 300px;
  overflow: hidden;
`

const Eighties = () => (
    <StaticQuery
      query={graphql`
      query {
          eightyheadline: file(relativePath: {eq: "80s-headline.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          accents: file(relativePath: {eq: "80s-accents.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img1: file(relativePath: {eq: "Photos/1980s/img1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img2: file(relativePath: {eq: "Photos/1980s/img2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img3: file(relativePath: {eq: "Photos/1980s/img3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img4: file(relativePath: {eq: "Photos/1980s/img4.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img5: file(relativePath: {eq: "Photos/1980s/img5.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img6: file(relativePath: {eq: "Photos/1980s/img6.png"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const { img1, img2, img3, img4, img5, img6, accents, eightyheadline } = data
        return (
            <>
              <div className="row" id="80s">      
                <div className="col-md-3" style={{padding: "0", margin: "0", top: "40px", right: "20px"}}>
                  <Img fluid={accents.childImageSharp.fluid} />
                </div>             
                <div className="col" style={{padding: "0"}}>
                    <div className="row" style={{float: "right", paddingRight: "50px"}}>
                      <Header fluid={eightyheadline.childImageSharp.fluid}/>
                      <p style={{textAlign: "right", marginLeft: "100px"}}>
                        The 80s were the decade of Madonna, MTV, and John Hughes movies. The hair was big, the clothes were neon, and the world was quickly entering into the new world of computer technology. Ronald Reagan occupied the Oval Office for most of the decade and Americans watched the news as the Communist Bloc began to disintegrate and the AIDs crisis tore through the country. In 1985, the Philadelphia Police Department bombed the headquarters of MOVE, a Black liberation group, just blocks from Penn’s campus. Flora Stewart (E ‘84) and Robin Briggs (C ‘89) remember University City back in the days of neon and Cyndi Lauper.
                      </p>
                    </div>
                    <div className="row">
                      <Body className="col-md-5" style={{right: "10px"}}>
                        <h4><b>Flora Stewart (E ‘84) </b></h4>
                        <p>
                          “I remember move in because I was the first in my family to leave for college. It was hot in Hill House and there weren’t any elevators. Once I moved in, three doors down there was a girl who also moved in that I had met like a month before coming on campus at a luncheon and it was weird that we were on the same floor. We ended up being lifelong friends. My parents left and I just remember standing in the lobby of Hill House watching people come in. In fact, the four lifelong friends that I have, I met that first day in the lobby of Hill House.” 
                        </p>
                        <p>
                          “I met an upperclassmen sometime during that first fall semester where I was kind of feeling down about classes in the engineering school, and he gave me advice in regards to ice cream. At Hill House, you got your own food and there was always ice cream, and he said, ‘No matter how bad you feel, ice cream is a feel good food. So whenever you feel down, eat ice cream.’ And that has been a lifelong bit of advice.”
                        </p>
                        <h4><b>Robin Briggs (C ‘89) </b></h4>
                        <p>
                         “I lived in lower quad my freshman year. Move in was sort of, you pulled up on the outside of the Quad on Spruce Street and somehow people pulled up with golf carts and pulled your stuff around to the other side. I lived on the fifth floor in Coxe with no elevators. It was just chaos, but it was kind of a fun chaos and there were certainly people around to help.” 
                        </p>
                        <p>
                         “We went to Chinatown and explored Philadelphia. I remember convocation, which was really fun. It was very meaningful and kind of like, ‘Oh, wow, this is the start of a big thing.’”
                        </p>
                      </Body>
                      <div className="col-md" style={{marginRight: "30px"}}>
                        <div className="row" style={{marginTop: "30px", marginBottom: "10px"}}>
                            <div className="col">
                                <SmallImage fluid={img1.childImageSharp.fluid} />
                            </div>
                            <div className="col">
                                <SmallImage fluid={img2.childImageSharp.fluid} />
                            </div>
                        </div>
                        <div className="row" style={{marginBottom: "10px"}}>
                            <div className="col">
                                <BigImage fluid={img3.childImageSharp.fluid} />
                            </div>
                        </div>
                        <div className="row" style={{marginBottom: "10px"}}>
                            <div className="col" style={{marginRight: "-10px"}}>
                                <Img fluid={img4.childImageSharp.fluid} style={{height: "401px", overflow: "hidden"}}/>
                            </div>
                            <div className="col">
                                <SmallImage fluid={img5.childImageSharp.fluid} style={{marginBottom: "10px"}}/>
                                <SmallImage fluid={img6.childImageSharp.fluid} />                                
                            </div>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </>
        )
      }}
    />
  )

export default Eighties