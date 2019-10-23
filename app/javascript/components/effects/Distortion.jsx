import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'
import ButtonSet from '../ButtonSet'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['none', '2x', '4x']

    let name = 'distortion'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeDistortionValue,
      changeEffectValue
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
          <div className="paramName">Distortion</div>
          <Slider
            name={name}
            min="0"
            max="100"
            value={effect.distortion}
            handleValueChange={changeDistortionValue}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">Oversample</div>
          <ButtonSet
            name={name}
            property="oversample"
            set={set}
            value={effect.oversample}
            handleValueChange={changeEffectValue}
          />
        </div>
        <ToggleSwitch
          value="Distortion"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
