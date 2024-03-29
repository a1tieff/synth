// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Menubar from '../components/Menubar'

const Hello = props => (
  <div className="component">
    Hello {props.name}!
    <Menubar name={props.name} handleClick={props.handleClick} />
  </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

function click() {
  console.log('Yo!')
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" handleClick={click} />,
    document.body.appendChild(document.createElement('div'))
  )
})
