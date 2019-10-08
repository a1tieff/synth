import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../components/PlaySwitch'
import ToggleSwitch from '../components/ToggleSwitch'
import Slider from '../components/Slider'
import Knob from '../components/Knob'

import Distortion from '../components/effects/Distortion'
import FeedbackDelay from '../components/effects/FeedbackDelay'
import Chorus from '../components/effects/Chorus'
import Tremolo from '../components/effects/Tremolo'
import Reverb from '../components/effects/Reverb'
//import Phaser from '../components/effects/Phaser'
//import AutoWah from '../components/effects/AutoWah'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    let autoFilter = new Tone.AutoFilter({
      frequency: 1,
      type: 'sine',
      depth: 1,
      baseFrequency: 200,
      octaves: 2.6,
      filter: {
        type: 'lowpass',
        rolloff: -12,
        Q: 1
      }
    })

    let autoPanner = new Tone.AutoPanner({
      frequency: 1,
      type: 'sine',
      depth: 1
    })

    let autoWah = new Tone.AutoWah({
      baseFrequency: 0,
      octaves: 0,
      sensitivity: -40,
      Q: 2,
      gain: 2,
      follower: {
        attack: 0.3,
        release: 0.5
      }
    })

    let bitCrusher = new Tone.BitCrusher({
      bits: 0
    })

    let chebyshev = new Tone.Chebyshev({
      order: 50,
      oversample: 'none'
    })

    let chorus = new Tone.Chorus({
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      type: 'sine',
      spread: 0
    })

    let convolver = new Tone.Convolver({
      onload: Tone.noOp,
      normalize: true
    })

    let distortion = new Tone.Distortion({
      //distortion: 0.4,
      //oversample: 'none'
      distortion: 0,
      oversample: '4x'
    })

    let feedbackDelay = new Tone.FeedbackDelay({
      delayTime: '4n',
      maxDelay: 0.8
    })

    let feedbackEffect = new Tone.FeedbackEffect({
      feedback: 0.125
    })

    let freeverb = new Tone.Freeverb({
      roomSize: 0.7,
      dampening: 3000
    })

    let jcReverb = new Tone.JCReverb({
      roomSize: 0.5
    })

    let phaser = new Tone.Phaser({
      frequency: 0.5,
      octaves: 3,
      stages: 10,
      Q: 10,
      baseFrequency: 350
    })

    let pingPongDelay = new Tone.PingPongDelay({
      delayTime: 0.25,
      maxDelayTime: 1
    })

    let pitchShift = new Tone.PitchShift({
      pitch: 0,
      windowSize: 0.1,
      delayTime: 0,
      feedback: 0
    })

    let reverb = new Tone.Reverb({
      //decay: 1.5,
      decay: 0,
      preDelay: 0.01
    })

    let stereoWidener = new Tone.StereoWidener({
      width: 0.5
    })

    let tremolo = new Tone.Tremolo({
      frequency: 10,
      type: 'sine',
      depth: 0.5,
      spread: 0
    })

    let vibrato = new Tone.Vibrato({
      maxDelay: 0.005,
      frequency: 5,
      depth: 0.1,
      type: 'sine'
    })

    autoFilter.wet.value = 0
    autoPanner.wet.value = 0
    autoWah.wet.value = 0
    bitCrusher.wet.value = 0
    chebyshev.wet.value = 0
    chorus.wet.value = 0
    convolver.wet.value = 0
    distortion.wet.value = 0
    feedbackDelay.wet.value = 0
    feedbackEffect.wet.value = 0
    freeverb.wet.value = 0
    jcReverb.wet.value = 0
    phaser.wet.value = 0
    pingPongDelay.wet.value = 0
    pitchShift.wet.value = 0
    reverb.wet.value = 0
    stereoWidener.wet.value = 0
    tremolo.wet.value = 0
    vibrato.wet.value = 0

    //synth
    let synth = new Tone.PolySynth()

    let synth2 = new Tone.Synth()

    //let synth1 = new Tone.Synth()
    //let synth2 = new Tone.Synth()
    //let synth3 = new Tone.Synth()
    //let synth4 = new Tone.Synth()

    synth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
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

    synth2.chain(
      reverb,
      tremolo,
      chorus,
      distortion,
      feedbackDelay,
      Tone.Master
    )

    // loop

    let loop1 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('C2', '8n', time)
    }, '4n')

    let loop2 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('E2', '4n', time)
    }, '4n')

    let loop3 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('E7', '8n', time)
    }, '4n')

    let loop4 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('A2', '16n', time)
    }, '16n')

    let loop5 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('G2', '8n', time)
    }, '16n')

    //let loop5 = new Tone.Loop(function(time) {
    //  synth2.triggerAttackRelease('G2', '8n', time)
    //}, '16n')

    let loop6 = new Tone.Pattern(
      function(time, note) {
        synth.triggerAttackRelease('8n', time)
      },
      ['C2', 'D4', 'E5', 'A6'],
      'upDown'
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
      convolver: {
        effect: convolver,
        wet: 0,
        on: false
      },
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
      }
    }

    _.bindAll(
      this,
      'getRandomArbitrary',
      'generateRandom',
      //'toggleSynth2',
      'toggleLoop',
      'toggleEffect',
      'changeEffectWetValue',
      'changeDistortionValue',
      'changeFeedbackDelayValue',
      'changeChorusValue',
      'changeAutoWahValue',
      'changeAutoWahValue2',
      'changeTremoloValue',
      'changeReverbValue',
      'changeReverbValue2',
      'changePhaserValue',
      'changeBitCrusherValue'
    )

    Tone.Transport.bpm.value = 115
    Tone.Transport.start()
  }

  componentDidMount() {
    this.generateRandom()
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  generateRandom() {
    const { lastChange, timeout } = this.state

    //console.log(
    //  Date.now(),
    //  lastChange,
    //  Date.now() - lastChange,
    //  timeout,
    //  Date.now() - lastChange >= timeout
    //)

    if (Date.now() - lastChange >= timeout) {
      const random = this.getRandomArbitrary(100, 3000)
      this.setState({
        lastChange: Date.now(),
        timeout: random
      })

      this.changeDistortionValue('distortion', random / 30)
      this.changeChorusValue('spread', random / 15)
    }

    setTimeout(() => this.generateRandom(), timeout)
  }

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
      synth,
      synth2,
      loop1,
      loop2,
      loop3,
      loop4,
      loop5,
      loop6
    } = this.state
    let { toggleEffect } = this

    return (
      <div>
        <div className="sectionLoops">
          <div className="itemLoop">
            <div className="headerLoop">Loop 1</div>
            <PlaySwitch
              name="play"
              value={loop1.on}
              handleToggleClick={() => this.toggleLoop('loop1')}
            />
          </div>
          <div className="itemLoop">
            <div className="headerLoop">Loop 2</div>
            <PlaySwitch
              name="play"
              value={loop2.on}
              handleToggleClick={() => this.toggleLoop('loop2')}
            />
          </div>
          <div className="itemLoop">
            <div className="headerLoop">Loop 3</div>
            <PlaySwitch
              name="play"
              value={loop3.on}
              handleToggleClick={() => this.toggleLoop('loop3')}
            />
          </div>
          <div className="itemLoop">
            <div className="headerLoop">Loop 4</div>
            <PlaySwitch
              name="play"
              value={loop4.on}
              handleToggleClick={() => this.toggleLoop('loop4')}
            />
          </div>
          <div className="itemLoop">
            <div className="headerLoop">Loop 5</div>
            <PlaySwitch
              name="play"
              value={loop5.on}
              handleToggleClick={() => this.toggleLoop('loop5')}
            />
          </div>
          <div className="itemLoop">
            <div className="headerLoop">Pattern</div>
            <PlaySwitch
              name="play"
              value={loop6.on}
              handleToggleClick={() => this.toggleLoop('loop6')}
            />
          </div>
        </div>
        <Distortion
          {...this.state.distortion}
          toggleEffect={() => toggleEffect('distortion')}
          changeEffectWetValue={this.changeEffectWetValue}
          changeDistortionValue={this.changeDistortionValue}
        />
        <Chorus
          {...this.state.chorus}
          toggleEffect={() => toggleEffect('chorus')}
          changeEffectWetValue={this.changeEffectWetValue}
          changeChorusValue={this.changeChorusValue}
        />
        <FeedbackDelay
          {...this.state.feedbackDelay}
          toggleEffect={() => toggleEffect('feedbackDelay')}
          changeEffectWetValue={this.changeEffectWetValue}
          changeFeedbackDelayValue={this.changeFeedbackDelayValue}
        />
        <Tremolo
          {...this.state.tremolo}
          toggleEffect={() => toggleEffect('tremolo')}
          changeEffectWetValue={this.changeEffectWetValue}
          changeTremoloValue={this.changeTremoloValue}
        />
        <Reverb
          {...this.state.reverb}
          toggleEffect={() => toggleEffect('reverb')}
          changeEffectWetValue={this.changeEffectWetValue}
          changeReverbValue={this.changeReverbValue}
          changeReverbValue2={this.changeReverbValue2}
        />
        Change AutoWah Wet Value
        <Slider
          name="autoWah"
          min="0"
          max="1"
          value={autoWah.effect.wet.value}
          handleValueChange={this.changeEffectWetValue}
        />
        Change Phaser Wet Value
        <Slider
          name="phaser"
          min="0"
          max="1"
          value={phaser.effect.wet.value}
          handleValueChange={this.changeEffectWetValue}
        />
        Change BitCrusher Wet Value
        <Slider
          name="bitCrusher"
          min="0"
          max="1"
          value={bitCrusher.effect.wet.value}
          handleValueChange={this.changeEffectWetValue}
        />
        AutoWah Octaves
        <Slider
          name="autoWah"
          min="0"
          max="20"
          value={autoWah.effect.octaves}
          handleValueChange={this.changeAutoWahValue}
        />
        AutoWah baseFrequency
        <Slider
          name="autoWah"
          min="0"
          max="10"
          value={autoWah.effect.baseFrequency}
          handleValueChange={this.changeAutoWahValue2}
        />
        Phaser Stages
        <Slider
          name="phaser"
          min="0"
          max="50"
          value={phaser.effect.stages}
          handleValueChange={this.changePhaserValue}
        />
        BitCrusher Bits
        <Slider
          name="bitCrusher"
          min="0"
          max="6"
          value={bitCrusher.effect.bits}
          handleValueChange={this.changeBitCrusherValue}
        />
        Knob AutoWah ?
        <Knob min="-40" max="0" handleValueChange={this.changeAutoWahValue} />
        Toggle AutoWah
        <ToggleSwitch
          value="AutoWah"
          current={autoWah.on}
          handleClick={() => toggleEffect('autoWah')}
        />
        Toggle Phaser
        <ToggleSwitch
          value="Phaser"
          current={phaser.on}
          handleClick={() => toggleEffect('phaser')}
        />
        Toggle BitCrusher
        <ToggleSwitch
          value="Bit Crusher"
          current={bitCrusher.on}
          handleClick={() => toggleEffect('bitCrusher')}
        />
      </div>
    )
  }
}
