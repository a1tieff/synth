import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Thereminvox from '../containers/Thereminvox'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Thereminvox />,
    document.body.appendChild(document.createElement('div'))
  )
})
