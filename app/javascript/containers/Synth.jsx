import React from 'react'
import Tone from 'tone'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    let distortion = new Tone.Distortion({
      distortion: 10,
      oversample: '4x'
    })

    this.state = {
      distortion: distortion,
      distortionIsOn: false
    }

    this.startSynth = this.startSynth.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)
    this.toggleFeedbackDelay = this.toggleFeedbackDelay.bind(this)
    this.toggleTremolo = this.toggleTremolo.bind(this)
    this.toggleDistortion = this.toggleDistortion.bind(this)
    this.toggleDistortion100 = this.toggleDistortion100.bind(this)
  }

  startSynth() {
    let synth = new Tone.Synth() //.toMaster()

    this.setState({
      synth: synth
    })

    let loop = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('C2', '8n', time)
    }, '4n')

    loop.start('0m').stop('16m')

    Tone.transport.bpm.value = 115
    Tone.transport.start()
  }

  toggleFilter() {
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
    }).toMaster()

    this.setState({
      autoFilter: autoFilter
    })

    //let { synth } = this.state
    //synth.connect(autoFilter)
    this.state.synth.connect(autoFilter)
  }

  toggleFeedbackDelay() {
    let feedbackDelay1 = new Tone.FeedbackDelay({
      delayTime: '32n',
      maxDelay: 10
    }).toMaster()

    let feedbackDelay2 = new Tone.FeedbackDelay({
      delayTime: '8n',
      maxDelay: 10
    }).toMaster()

    //this.setState({
    //  feedbackDelay: feedbackDelay
    //})

    //let { synth } = this.state
    //synth.connect(feedbackDelay)
    this.state.synth.connect(feedbackDelay1)
    this.state.synth.connect(feedbackDelay2)
  }

  toggleTremolo() {
    let tremolo = new Tone.Tremolo({
      frequency: 10,
      type: 'sine',
      depth: 2,
      spread: 180
    }).toMaster()

    this.state.synth.connect(tremolo)
  }

  toggleDistortion() {
    if (this.state.distortion == true) {
      //this.state.synth.disconnect()
      //this.state.synth.chain(Tone.Master)

      this.state.distortion.wet.value = 0

      this.setState({
        distortionIsOn: false
      })
    } else {
      this.state.synth.chain(this.state.distortion, Tone.Master)
      this.state.distortion.wet.value = 1

      this.setState({
        distortionIsOn: true
      })
    }
  }

  toggleDistortion100() {
    let { distortion } = this.state
    distortion.distortion = 100

    this.setState({
      distortion: distortion
    })
  }

  render() {
    return (
      <div>
        <div onClick={this.startSynth}>Start</div>
        <div onClick={this.toggleFilter}>Toggle Filter</div>
        <div onClick={this.toggleFeedbackDelay}>Toggle Feedback Delay</div>
        <div onClick={this.toggleTremolo}>Toggle Tremolo</div>
        <div onClick={this.toggleDistortion}>Toggle Distortion</div>
        <div onClick={this.toggleDistortion100}>Toggle Distortion 100</div>
      </div>
    )
  }
}
