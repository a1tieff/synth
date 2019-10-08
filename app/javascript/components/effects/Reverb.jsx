import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Reverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'reverb'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeReverbValue,
      changeReverbValue2
    } = this.props

    return (
      <div className="Effect">
        <h1 className="headerEffect">Reverb</h1>
        <div className="paramEffect">Wet</div>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <div className="paramEffect">Decay</div>
        <Slider
          name={name}
          min="0"
          max="10"
          value={effect.decay}
          handleValueChange={changeReverbValue}
        />
        <div className="paramEffect">pre Delay</div>
        <Slider
          name={name}
          min="0"
          max="20"
          value={effect.preDelay}
          handleValueChange={changeReverbValue2}
        />
        <ToggleSwitch value="Reverb" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
