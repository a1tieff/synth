import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'
import ButtonSet from '../ButtonSet'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    let name = 'chorus'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeChorusValue,
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
          <div className="paramName">Spread</div>
          <Slider
            name={name}
            min="0"
            max="200"
            value={effect.spread}
            handleValueChange={changeChorusValue}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">Type</div>
          <ButtonSet
            name={name}
            property="type"
            set={set}
            value={effect.type}
            handleValueChange={changeEffectValue}
          />
        </div>
        <ToggleSwitch value="Chorus" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
