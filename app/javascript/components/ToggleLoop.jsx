import _ from 'lodash'
import React from 'react'
import classnames from 'classnames'

export default class ToggleLoop extends React.Component {
  constructor(props) {
    super(props)

    _.bindAll(this, 'handleClick')
  }

  handleClick() {
    const { value } = this.props
    this.props.handleClick(value)
  }

  render() {
    const { current, value } = this.props

    const classes = classnames({
      ToggleLoop: true,
      on: current,
      [`${value}`]: true
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        {value}
      </div>
    )
  }
}
