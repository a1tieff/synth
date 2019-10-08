//import React from 'react'
//
//import PlaySwitch from '../PlaySwitch'
//import ToggleSwitch from '../ToggleSwitch'
//import Slider from '../Slider'
//import Knob from '../Knob'
//
//export default class AutoWah extends React.Component {
//  constructor(props) {
//    super(props)
//  }
//
//  render() {
//    let name = 'autoWah'
//    const {
//      effect,
//      wet,
//      on,
//      toggleEffect,
//      changeEffectWetValue,
//      changeautoWahValue
//    } = this.props
//
//    return (
//      <div className="Effect">
//        <h1 className="headerEffect">AutoWah</h1>
//        <div className="paramEffect">Wet</div>
//        <Slider
//          name={name}
//          min="0"
//          max="1"
//          value={wet}
//          handleValueChange={changeEffectWetValue}
//        />
//        <div className="paramEffect">baseFrequency</div>
//        <Slider
//          name={name}
//          min="0"
//          max="10"
//          value={effect.baseFrequency}
//          handleValueChange={changeAutoWahValue2}
//        />
//        <div className="paramEffect">Octaves</div>
//        <Slider
//          name={name}
//          min="0"
//          max="20"
//          value={effect.octaves}
//          handleValueChange={changeAutoWahValue}
//        />
//        <ToggleSwitch value="AutoWah" current={on} handleClick={toggleEffect} />
//      </div>
//    )
//  }
//}
