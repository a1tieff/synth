import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Phaser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'phaser'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changePhaserValue,
      changePhaserValue2,
      changePhaserValue3,
      changePhaserValue4
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
          <div className="paramName">Stages</div>
          <Slider
            name={name}
            min="0"
            max="50"
            value={effect.stages}
            handleValueChange={changePhaserValue}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">Octaves</div>
          <Slider
            name={name}
            min="0"
            max="10"
            value={effect.octaves}
            handleValueChange={changePhaserValue2}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">frequency</div>
          <Slider
            name={name}
            min="0"
            max="1"
            value={effect.frequency}
            handleValueChange={changePhaserValue3}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">base frequency</div>
          <Slider
            name={name}
            min="0"
            max="350"
            value={effect.baseFrequency}
            handleValueChange={changePhaserValue4}
          />
        </div>
        <ToggleSwitch value="Phaser" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
