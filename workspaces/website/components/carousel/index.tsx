import {Carousel} from '@website/components/carousel/styled'
import * as React from 'react'

interface Props {
}

export default class TopBar extends React.Component<Props> {
  render() {
    return(
      <Carousel>
        <h1>
          Carousel
        </h1>
      </Carousel>
    )
  }
}
