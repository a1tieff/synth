import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class PingPongDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'pingPongDelay'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changePingPongDelayValue
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
          <div className="paramName">Delay Time</div>
          <Slider
            name={name}
            min="0"
            max="50"
            value={effect.delayTime}
            handleValueChange={changePingPongDelayValue}
          />
        </div>
        <ToggleSwitch
          value="Ping-Pong Delay"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
