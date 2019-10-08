//import React from 'react'
//
//import PlaySwitch from '../PlaySwitch'
//import ToggleSwitch from '../ToggleSwitch'
//import Slider from '../Slider'
//import Knob from '../Knob'
//
//export default class Phaser extends React.Component {
//  constructor(props) {
//    super(props)
//  }
//
//  render() {
//    let name = 'phaser'
//    const {
//      effect,
//      wet,
//      on,
//      toggleEffect,
//      changeEffectWetValue,
//      changeTremoloValue
//    } = this.props
//
//    return (
//      <div className="Effect">
//        <h1 className="headerEffect">Phaser</h1>
//        <div className="paramEffect">Wet</div>
//        <Slider
//          name={name}
//          min="0"
//          max="1"
//          value={wet}
//          handleValueChange={changeEffectWetValue}
//        />
//        <div className="paramEffect">Stages</div>
//        <Slider
//          name={name}
//          min="0"
//          max="50"
//          value={effect.stages}
//          handleValueChange={changePhaserValue}
//        />
//        <ToggleSwitch value="Phaser" current={on} handleClick={toggleEffect} />
//      </div>
//    )
//  }
//}
