import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'distortion'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeDistortionValue
    } = this.props

    return (
      <div className="Effect">
        <h1 className="headerEffect">Distortion</h1>
        <div className="paramEffect">Wet</div>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <div className="paramEffect">Distortion</div>
        <Slider
          name={name}
          min="0"
          max="100"
          value={effect.distortion}
          handleValueChange={changeDistortionValue}
        />
        <ToggleSwitch
          value="Distortion"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
