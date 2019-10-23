import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class BitCrusher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'bitCrusher'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeBitCrusherValue
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
          <div className="paramName">Bits</div>
          <Slider
            name={name}
            min="0"
            max="32"
            value={effect.bitCrusher}
            handleValueChange={changeBitCrusherValue}
          />
        </div>
        <ToggleSwitch
          value="Bit Crusher"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
