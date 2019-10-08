import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'tremolo'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeTremoloValue
    } = this.props

    return (
      <div className="Effect">
        <h1 className="headerEffect">Tremolo</h1>
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
          max="50"
          value={effect.spread}
          handleValueChange={changeTremoloValue}
        />
        <ToggleSwitch value="Tremolo" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
