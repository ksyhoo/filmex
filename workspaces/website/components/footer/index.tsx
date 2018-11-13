import {Foot} from '@website/components/footer/styled'
import * as React from 'react'

interface Props {
}

export default class Footer extends React.Component<Props> {
  render() {
    return(
      <Foot>
        <h1>
          Footer
        </h1>
      </Foot>
    )
  }
}
