import React from 'react'

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'red'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('Inner handle click')
    this.props.handleClick()

    let color = this.state.color == 'red' ? 'blue' : 'red'

    this.setState({
      color: color
    })
  }

  render() {
    const { name, handleClick } = this.props

    return (
      <div onClick={this.handleClick} style={{ color: this.state.color }}>
        {name} {this.state.color}
      </div>
    )
  }
}
