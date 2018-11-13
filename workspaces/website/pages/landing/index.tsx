import Carousel from '@website/components/carousel'
import Footer from '@website/components/footer'
import TopBar from '@website/components/top-bar'
import {App} from '@website/pages/landing/styled'
import {WithStore} from '@website/types'
import * as React from 'react'

class Landing extends React.Component<WithStore> {
  render() {
    return (
      <App>
        <TopBar/>
        <Carousel/>
        <Footer/>
      </App>
    )
  }

}

export default Landing
