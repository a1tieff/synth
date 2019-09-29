import React from 'react'
import Avatar from './Avatar'

export default class Menubar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Menubar Test
        <Avatar name={this.props.name} handleClick={this.props.handleClick} />
      </div>
    )
  }
}
