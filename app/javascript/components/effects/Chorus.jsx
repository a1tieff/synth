import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'chorus'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeChorusValue
    } = this.props

    return (
      <div className="Effect">
        <h1 className="headerEffect">Chorus</h1>
        <div className="paramEffect">Wet</div>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <div className="paramEffect">Spread</div>
        <Slider
          name={name}
          min="0"
          max="200"
          value={effect.spread}
          handleValueChange={changeChorusValue}
        />
        <ToggleSwitch value="Chorus" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
