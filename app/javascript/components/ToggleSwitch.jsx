import _ from 'lodash'
import React from 'react'
import classnames from 'classnames'

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props)

    _.bindAll(this, 'handleClick')
  }

  handleClick() {
    const { value } = this.props
    this.props.handleClick(value)
  }

  //componentDidMount() {
  //  let idArray = ['orange', 'acid', 'lilac', 'blue', 'pink']
  //  let randomId = idArray[Math.floor(Math.random() * idArray.length)]

  //  this.setState({
  //    id: randomId
  //  })
  //}

  render() {
    const { current, value } = this.props
    //let idArray = ['orange', 'yellow', 'acid', 'lilac', 'blue', 'pink']
    //let randomId = idArray[Math.floor(Math.random() * idArray.length)]

    const classes = classnames({
      ToggleSwitch: true,
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
