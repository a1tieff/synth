import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'
import ButtonSet from '../ButtonSet'

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    let name = 'tremolo'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeTremoloValue,
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
            max="50"
            value={effect.spread}
            handleValueChange={changeTremoloValue}
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
        <ToggleSwitch value="Tremolo" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
