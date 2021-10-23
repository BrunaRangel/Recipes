import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'


export const query = graphql`
    query {
        alldata {
          headers {
            background {
              url
            }
            logo {
              url
            }
            recipes
            subscribe
            title
            about
          }
          mains {
            titleLatest
            imageCake {
              url
            }
            imagePizza {
              url
            }
            imageSmoothie {
              url
            }
            textCake
            textPizza
            textSmoothie
            imageSpoon {
              url
            }
            titleAbout
            descriptionAbout
            subscribe
            newsletter
            submit
          }
          footers {
            imageInstagram {
              url
            }
            imageTwitter {
              url
            }
            imageFacebook {
              url
            }
            imagePinterest {
              url
            }
            recipes
            subscribe
            about
            marketed
          }
        }
    }
`

export default function Index({ data }) {

    console.log(data.alldata)

    const dataHeaders = data.alldata.headers[0]
    const dataMains = data.alldata.mains[0]
    const dataFooters = data.alldata.footers[0]
    

    return (
        <div>
            <Header
                logo={dataHeaders.logo.url}
                about={dataHeaders.about}
                recipes={dataHeaders.recipes}
                subscribe={dataHeaders.subscribe}
                background={dataHeaders.background.url}
                title={dataHeaders.title}
            />
             <Main
               titleLatest={dataMains.titleLatest}
               imageCake={dataMains.imageCake.url}
               textCake={dataMains.textCake}
               imagePizza={dataMains.imagePizza.url}
               textPizza={dataMains.textPizza}
               imageSmoothie={dataMains.imageSmoothie.url}
               textSmoothie={dataMains.textSmoothie}
               imageSpoon={dataMains.imageSpoon.url}
               titleAbout={dataMains.titleAbout}
               descriptionAbout={dataMains.descriptionAbout}
               subscribe={dataMains.subscribe}
               newsletter={dataMains.newsletter}
               submit={dataMains.submit}
            />
            <Footer 
              imageInstagram={dataFooters.imageInstagram.url}
              imageTwitter={dataFooters.imageTwitter.url}
              imageFacebook={dataFooters.imageFacebook.url}
              imagePinterest={dataFooters.imagePinterest.url}
              recipes={dataFooters.recipes}
              subscribe={dataFooters.subscribe}
              about={dataFooters.about}
              marketed={dataFooters.marketed}
            />
        </div>
    )
}
