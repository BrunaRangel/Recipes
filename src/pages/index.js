import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'


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
        }
    }
`


export default function Index({ data }) {

    console.log(data.alldata)

    const dataHeaders = data.alldata.headers[0]
    

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
            
        </div>
    )
}
