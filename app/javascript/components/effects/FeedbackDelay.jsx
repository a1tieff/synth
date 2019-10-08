import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class FeedbackDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'feedbackDelay'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeFeedbackDelayValue
    } = this.props

    return (
      <div className="Effect">
        <h1 className="headerEffect">Feedback Delay</h1>
        <div className="paramEffect">Wet</div>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <div className="paramEffect">max Delay</div>
        <Slider
          name={name}
          min="0"
          max="100"
          value={effect.maxDelay}
          handleValueChange={changeFeedbackDelayValue}
        />
        <ToggleSwitch
          value="Feedback Delay"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
