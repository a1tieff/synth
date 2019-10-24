import _ from 'lodash'
import $ from 'jquery'
import React from 'react'
import Tone from 'tone'

import * as effects from '../tunes/effects'

import PlaySwitch from '../components/PlaySwitch'
import ToggleSwitch from '../components/ToggleSwitch'
import ToggleLoop from '../components/ToggleLoop'

import Distortion from '../components/effects/Distortion'
import FeedbackDelay from '../components/effects/FeedbackDelay'
import Chorus from '../components/effects/Chorus'
import Tremolo from '../components/effects/Tremolo'
import Reverb from '../components/effects/Reverb'
import Phaser from '../components/effects/Phaser'
import AutoWah from '../components/effects/AutoWah'
import BitCrusher from '../components/effects/BitCrusher'
import PingPongDelay from '../components/effects/PingPongDelay'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    //synth
    let synth = new Tone.PolySynth()

    //effects
    let autoFilter = effects.autoFilter()
    let chorus = effects.chorus()
    let distortion = effects.distortion()
    let feedbackDelay = effects.feedbackDelay()
    let freeverb = effects.freeverb()
    let phaser = effects.phaser()
    let pingPongDelay = effects.pingPongDelay()
    let autoPanner = effects.autoPanner()
    let autoWah = effects.autoWah()
    let bitCrusher = effects.bitCrusher()
    let chebyshev = effects.chebyshev()
    let feedbackEffect = effects.feedbackEffect()
    let jcReverb = effects.jcReverb()
    let pitchShift = effects.pitchShift()
    let reverb = effects.reverb()
    let stereoWidener = effects.stereoWidener()
    let tremolo = effects.tremolo()
    let vibrato = effects.vibrato()

    synth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      //convolver, not defined
      distortion,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    )

    //loop

    let loop1 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('C2', '8n', time)
    }, '4n')

    let loop2 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('E2', '4n', time)
    }, '4n')

    let loop3 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('E2', '8n', time)
    }, '4n')

    let loop4 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('A2', '16n', time)
    }, '16n')

    let loop5 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('G2', '8n', time)
    }, '16n')

    let loop6 = new Tone.Pattern(
      function(time, note) {
        synth.triggerAttackRelease(note, '8n', time)
      },
      ['C6', 'D4', 'E5', 'A6']
    )

    let loop7 = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, '8n', time)
      },
      [
        'A9',
        'A7',
        'A5',
        'E7',
        'E5',
        'E3',
        'E3/5',
        'E3',
        'E3',
        'E3/5',
        'E3',
        'E3',
        'A9',
        'A7',
        'A5',
        'E7',
        'E5',
        'E3',
        'E3/5',
        'E3',
        'E3',
        'A5',
        'A2',
        'A2',
        'A9',
        'A7',
        'A7',
        'A9',
        'A7',
        'A7',
        'E5/7',
        'E5',
        'E5',
        'E5/7',
        'E5',
        'E5'
      ]
      // ['C4', ['E4', 'D4', 'E4'], 'G4', ['A4', 'G4']]
      //['C6']
    )

    let loop8 = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, '1m', time)
      },
      ['D4', 'G2', 'G4', 'D4', 'D3', 'D2', 'D0', 'A2', 'G4', 'G4']
    )

    let loop9 = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, '1m', time)
      },
      [
        'E5',
        'A7',
        'D7',
        'A7',
        'G2',
        'D4',
        'G9',
        'D11',
        'A11',
        'D11',
        'G7',
        'A9',
        'D9',
        'A9'
      ]
    )

    this.state = {
      lastChange: Date.now(),
      timeout: 0,
      autoFilter: {
        effect: autoFilter,
        wet: 0,
        on: false
      },
      autoPanner: {
        effect: autoPanner,
        wet: 0,
        on: false
      },
      autoWah: {
        effect: autoWah,
        wet: 0,
        on: false
      },
      bitCrusher: {
        effect: bitCrusher,
        wet: 0,
        on: false
      },
      chebyshev: {
        effect: chebyshev,
        wet: 0,
        on: false
      },
      chorus: {
        effect: chorus,
        wet: 0,
        on: false
      },
      //convolver: {
      //  effect: convolver,
      //  wet: 0,
      //  on: false
      //},
      distortion: {
        effect: distortion,
        wet: 0,
        on: false
      },
      feedbackDelay: {
        effect: feedbackDelay,
        wet: 0,
        on: false
      },
      feedbackEffect: {
        effect: feedbackEffect,
        wet: 0,
        on: false
      },
      freeverb: {
        effect: freeverb,
        wet: 0,
        on: false
      },
      jcReverb: {
        effect: jcReverb,
        wet: 0,
        on: false
      },
      phaser: {
        effect: phaser,
        wet: 0,
        on: false
      },
      pingPongDelay: {
        effect: pingPongDelay,
        wet: 0,
        on: false
      },
      pitchShift: {
        effect: pitchShift,
        wet: 0,
        on: false
      },
      reverb: {
        effect: reverb,
        wet: 0,
        on: false
      },
      stereoWidener: {
        effect: stereoWidener,
        wet: 0,
        on: false
      },
      tremolo: {
        effect: tremolo,
        wet: 0,
        on: false
      },
      vibrato: {
        effect: vibrato,
        wet: 0,
        on: false
      },
      synth: {
        instrument: synth,
        on: false
      },
      //synth2: {
      //  instrument: synth2,
      //  on: false
      //},
      loop1: {
        loop: loop1,
        on: false
      },
      loop2: {
        loop: loop2,
        on: false
      },
      loop3: {
        loop: loop3,
        on: false
      },
      loop4: {
        loop: loop4,
        on: false
      },
      loop5: {
        loop: loop5,
        on: false
      },
      loop6: {
        loop: loop6,
        on: false
      },
      loop7: {
        loop: loop7,
        on: false
      },
      loop8: {
        loop: loop8,
        on: false
      },
      loop9: {
        loop: loop9,
        on: false
      }
    }

    _.bindAll(
      this,
      //'getRandomArbitrary',
      //'generateRandom',
      //'toggleSynth2',
      'toggleLoop',
      'toggleEffect',
      'changeEffectWetValue',
      'changeEffectValue',
      'changeDistortionValue',
      'changeFeedbackDelayValue',
      'changeFeedbackDelayValue2',
      'changeChorusValue',
      'changeAutoWahValue',
      'changeAutoWahValue2',
      'changeTremoloValue',
      'changeReverbValue',
      'changeReverbValue2',
      'changePhaserValue',
      'changePhaserValue2',
      'changePhaserValue3',
      'changePhaserValue4',
      'changeBitCrusherValue',
      'changePingPongDelayValue'
    )

    Tone.Transport.bpm.value = 80
    Tone.Transport.start()
  }

  componentDidMount() {
    let { effect, wet, on } = this.state.distortion

    effect.wet.value = on == true ? this.props.wet : 0
    effect.distortion = this.props.distortion
    effect.oversample = this.props.oversample

    this.setState({
      distortion: {
        effect,
        wet: this.props.wet,
        on: this.props.on
      }
    })
  }

  //componentDidMount() {
  //  this.generateRandom()
  //}

  //getRandomArbitrary(min, max) {
  //  return Math.floor(Math.random() * (max - min)) + min
  //}

  //generateRandom() {
  //  const { lastChange, timeout } = this.state

  //  //console.log(
  //  //  Date.now(),
  //  //  lastChange,
  //  //  Date.now() - lastChange,
  //  //  timeout,
  //  //  Date.now() - lastChange >= timeout
  //  //)

  //  if (Date.now() - lastChange >= timeout) {
  //    const random = this.getRandomArbitrary(100, 3000)
  //    this.setState({
  //      lastChange: Date.now(),
  //      timeout: random
  //    })

  //    this.changeDistortionValue('distortion', random / 30)
  //    this.changeChorusValue('spread', random / 15)
  //  }

  //  setTimeout(() => this.generateRandom(), timeout)
  //}

  //toggleSynth2() {
  //  let { instrument, on } = this.state.synth2
  //  let { loop } = this.state.loop5

  //  on == true ? loop.stop() : loop.start('0m')

  //  //if (on == true) {
  //  //  loop.stop()
  //  //  console.log('synth off')
  //  //} else {
  //  //  loop.start('0m')
  //  //  console.log('synth on')
  //  //}

  //  this.setState({
  //    synth2: {
  //      instrument: synth2,
  //      on: !on
  //    }
  //  })
  //}

  toggleLoop(loopName) {
    let { loop, on } = this.state[loopName]
    on == true ? loop.stop() : loop.start('0m')

    //if (on == true) {
    //  loop.stop()
    //  console.log('synth off')
    //} else {
    //  loop.start('0m')
    //  console.log('synth on')
    //}

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    })

    //loop.start('0m').stop('16m')
  }

  toggleEffect(effectName) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  //changeBpmValue() {
  //  let { name, value } = this.props.Tone.Transport.bpm.value

  //  this.setState({ value })
  //}

  changeEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    value = effect.wet.value = on == true ? value : 0

    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeEffectValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName]

    if (effectProperty == 'order') {
      value = Math.round(value)
    }

    effect[effectProperty] = value

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  changeDistortionValue(effectName, value) {
    let { effect, wet, on } = this.state.distortion

    effect.distortion = value

    this.setState({
      distortion: {
        effect,
        wet,
        on
      }
    })
  }

  changeReverbValue(effectName, value) {
    let { effect, wet, on } = this.state.reverb

    effect.decay = value

    this.setState({
      reverb: {
        effect,
        wet,
        on
      }
    })
  }

  changeReverbValue2(effectName, value) {
    let { effect, wet, on } = this.state.reverb

    effect.preDelay = value

    this.setState({
      reverb: {
        effect,
        wet,
        on
      }
    })
  }

  changePhaserValue(effectName, value) {
    let { effect, wet, on } = this.state.phaser

    effect.stages = value

    this.setState({
      phaser: {
        effect,
        wet,
        on
      }
    })
  }

  changePhaserValue2(effectName, value) {
    let { effect, wet, on } = this.state.phaser

    effect.octaves = value

    this.setState({
      phaser: {
        effect,
        wet,
        on
      }
    })
  }

  changePhaserValue3(effectName, value) {
    let { effect, wet, on } = this.state.phaser

    effect.frequency.value = value

    this.setState({
      phaser: {
        effect,
        wet,
        on
      }
    })
  }

  changePhaserValue4(effectName, value) {
    let { effect, wet, on } = this.state.phaser

    effect.baseFrequency = value

    this.setState({
      phaser: {
        effect,
        wet,
        on
      }
    })
  }

  changeBitCrusherValue(effectName, value) {
    let { effect, wet, on } = this.state.bitCrusher

    effect.bits = value

    this.setState({
      bitCrusher: {
        effect,
        wet,
        on
      }
    })
  }

  changeFeedbackDelayValue(effectName, value) {
    let { effect, wet, on } = this.state.feedbackDelay

    effect.maxDelay = value

    this.setState({
      feedbackDelay: {
        effect,
        wet,
        on
      }
    })
  }

  changeFeedbackDelayValue2(effectName, value) {
    let { effect, wet, on } = this.state.feedbackDelay

    effect.delayTime.value = value

    this.setState({
      feedbackDelay: {
        effect,
        wet,
        on
      }
    })
  }

  changeChorusValue(effectName, value) {
    let { effect, wet, on } = this.state.chorus

    effect.spread = value

    this.setState({
      chorus: {
        effect,
        wet,
        on
      }
    })
  }

  changeTremoloValue(effectName, value) {
    let { effect, wet, on } = this.state.tremolo

    effect.spread = value

    this.setState({
      tremolo: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoWahValue(effectName, value) {
    let { effect, wet, on } = this.state.autoWah

    effect.octaves = value

    this.setState({
      autoWah: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoWahValue2(effectName, value) {
    let { effect, wet, on } = this.state.autoWah

    effect.baseFrequency = value

    this.setState({
      autoWah: {
        effect,
        wet,
        on
      }
    })
  }

  changePingPongDelayValue(effectName, value) {
    let { effect, wet, on } = this.state.pingPongDelay

    effect.delayTime.value = value

    this.setState({
      pingPongDelay: {
        effect,
        wet,
        on
      }
    })
  }

  render() {
    let {
      distortion,
      feedbackDelay,
      bitCrusher,
      autoWah,
      chorus,
      reverb,
      tremolo,
      phaser,
      pingPongDelay,
      synth,
      synth2,
      loop1,
      loop2,
      loop3,
      loop4,
      loop5,
      loop6,
      loop7,
      loop8,
      loop9
    } = this.state
    let { toggleEffect } = this

    return (
      <div>
        <div className="sectionLoops">
          <div className="itemLoop">
            <ToggleLoop
              value="loop 1"
              current={loop1.on}
              handleClick={() => this.toggleLoop('loop1')}
            />
          </div>
          <div className="itemLoop">
            <ToggleLoop
              value="loop 2"
              current={loop2.on}
              handleClick={() => this.toggleLoop('loop2')}
            />
          </div>
          <div className="itemLoop" id="ocean">
            <ToggleLoop
              value="loop 3"
              current={loop3.on}
              handleClick={() => this.toggleLoop('loop3')}
            />
          </div>
          <div className="itemLoop">
            <ToggleLoop
              value="loop 4"
              current={loop4.on}
              handleClick={() => this.toggleLoop('loop4')}
            />
          </div>
          <div className="itemLoop">
            <ToggleLoop
              value="loop 5"
              current={loop5.on}
              handleClick={() => this.toggleLoop('loop5')}
            />
          </div>
          <div className="itemLoop" id="ocean">
            <ToggleLoop
              value="pattern"
              current={loop6.on}
              handleClick={() => this.toggleLoop('loop6')}
            />
          </div>
          <div className="itemLoop">
            <ToggleLoop
              value="ns-1(mk)"
              current={loop7.on}
              handleClick={() => this.toggleLoop('loop7')}
            />
          </div>
          <div className="itemLoop">
            <ToggleLoop
              value="ns2-2(cm)"
              current={loop8.on}
              handleClick={() => this.toggleLoop('loop8')}
            />
          </div>
          <div className="itemLoop">
            <ToggleLoop
              value="ns-3(m)"
              current={loop9.on}
              handleClick={() => this.toggleLoop('loop9')}
            />
          </div>
        </div>
        <div className="panelEffects">
          <Distortion
            {...this.state.distortion}
            toggleEffect={() => toggleEffect('distortion')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeDistortionValue={this.changeDistortionValue}
            changeEffectValue={this.changeEffectValue}
          />
          <Chorus
            {...this.state.chorus}
            toggleEffect={() => toggleEffect('chorus')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeChorusValue={this.changeChorusValue}
            changeEffectValue={this.changeEffectValue}
          />
          <Tremolo
            {...this.state.tremolo}
            toggleEffect={() => toggleEffect('tremolo')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeTremoloValue={this.changeTremoloValue}
            changeEffectValue={this.changeEffectValue}
          />
          <FeedbackDelay
            {...this.state.feedbackDelay}
            toggleEffect={() => toggleEffect('feedbackDelay')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeFeedbackDelayValue={this.changeFeedbackDelayValue}
            changeFeedbackDelayValue2={this.changeFeedbackDelayValue2}
          />
          <Reverb
            {...this.state.reverb}
            toggleEffect={() => toggleEffect('reverb')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeReverbValue={this.changeReverbValue}
            changeReverbValue2={this.changeReverbValue2}
          />
          <AutoWah
            {...this.state.autoWah}
            toggleEffect={() => toggleEffect('autoWah')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeAutoWahValue={this.changeAutoWahValue}
            changeAutoWahValue2={this.changeAutoWahValue2}
          />
          <Phaser
            {...this.state.phaser}
            toggleEffect={() => toggleEffect('phaser')}
            changeEffectWetValue={this.changeEffectWetValue}
            changePhaserValue={this.changePhaserValue}
            changePhaserValue2={this.changePhaserValue2}
            changePhaserValue3={this.changePhaserValue3}
            changePhaserValue4={this.changePhaserValue4}
          />
          <BitCrusher
            {...this.state.bitCrusher}
            toggleEffect={() => toggleEffect('bitCrusher')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeBitCrusherValue={this.changeBitCrusherValue}
          />
          <PingPongDelay
            {...this.state.pingPongDelay}
            toggleEffect={() => toggleEffect('pingPongDelay')}
            changeEffectWetValue={this.changeEffectWetValue}
            changePingPongDelayValue={this.changePingPongDelayValue}
          />
        </div>
      </div>
    )
  }
}
