import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class AutoWah extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'autoWah'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeAutoWahValue,
      changeAutoWahValue2
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
          <div className="paramName">base Frequency</div>
          <Slider
            name={name}
            min="0"
            max="10"
            value={effect.baseFrequency}
            handleValueChange={changeAutoWahValue2}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">Octaves</div>
          <Slider
            name={name}
            min="0"
            max="11"
            value={effect.octaves}
            handleValueChange={changeAutoWahValue}
          />
        </div>
        <ToggleSwitch value="AutoWah" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
