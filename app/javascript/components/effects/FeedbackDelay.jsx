import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'
import ButtonSet from '../ButtonSet'

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
      changeFeedbackDelayValue,
      changeFeedbackDelayValue2
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
          <div className="paramName">max Delay</div>
          <Slider
            name={name}
            min="0"
            max="100"
            value={effect.maxDelay}
            handleValueChange={changeFeedbackDelayValue}
          />
        </div>
        <div className="paramEffect">
          <div className="paramName">Delay time</div>
          <Slider
            name={name}
            min="0"
            max="0.8"
            value={effect.delayTime}
            handleValueChange={changeFeedbackDelayValue2}
          />
        </div>
        <ToggleSwitch
          value="Feedback Delay"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
