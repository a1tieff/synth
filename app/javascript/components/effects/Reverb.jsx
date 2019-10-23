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
        <div className="paramEffect">
          <div className="paramName">Wet</div>
          <Slider
            name={name}
            min="0"
            max="1"
            value={wet}
            handleValueChange={changeEffectWetValue}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">Decay</div>
          <Slider
            name={name}
            min="0"
            max="1.5"
            value={effect.decay}
            handleValueChange={changeReverbValue}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">pre Delay</div>
          <Slider
            name={name}
            min="0"
            max="0.01"
            value={effect.preDelay}
            handleValueChange={changeReverbValue2}
          />
        </div>
        <ToggleSwitch value="Reverb" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
