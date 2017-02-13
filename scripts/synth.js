// Simple synth
// to generate  a tone: synth.generateTone(freq[hz],duration[seconds],vol[float,default is 1],waveform[int, 0-3])

function Synth(){
  this.context = new (window.AudioContext || window.webkitAudioContext)();

  this.oscillators = [];
  this.waveforms = ["sine","square","sawtooth","triangle"];

  this.destination = this.context.destination;
  this.gainNode = this.context.createGain();

  this.gainNode.connect(this.destination);
}

// for future use
Synth.prototype.addOscillator = function(){
  let oscillator = this.context.createOscillator(),
      volume = this.context.createGain();

  volume.connect(this.gainNode);
  oscillator.connect(volume);

  this.oscillators.push(oscillator);
  return oscillator;
}

Synth.prototype.generateTone = function(freq = 440, dur = 1, vol = 1, waveform = 0){
  let oscillator = this.context.createOscillator(),
      volume = this.context.createGain();

  volume.connect(this.gainNode);
  volume.gain.value = vol;

  oscillator.frequency.value = freq;
  oscillator.connect(volume);
  oscillator.type = this.waveforms[waveform];

  let currentTime = this.context.currentTime;
  oscillator.start(currentTime);
  oscillator.stop(currentTime + dur);
}

let synth = new Synth();
