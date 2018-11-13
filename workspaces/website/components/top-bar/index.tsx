import {Top} from '@website/components/top-bar/styled'
import * as React from 'react'

interface Props {
}

export default class TopBar extends React.Component<Props> {
  render() {
    return(
      <Top>
        <h1>
          TOP
        </h1>
      </Top>
    )
  }
}
