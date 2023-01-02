//DARK MODE

// Select the button

const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});

//CHANGE FONT SIZE

var slider = document.getElementById('fontsizeee');

slider.addEventListener('input', function () {
  var size = slider.value;
  // this sets the body's font size property, but you can set whatever you need to
  document.body.style.fontSize = size + 'px';
});

//IMAGE CHANGE

function changeTheme(e) {
  var e = document.getElementById('bg');
  var strUser = e.options[e.selectedIndex].value;
  if (strUser == 'default') {
    //  document.body.style.backgroundImage = "url('img_tree.png')";
    document.body.style.backgroundImage =
      "url('http://kenrockwell.com/nikon/d5300/sample-images/DSC_0024.jpg')";
    document.body.style.cursor = pointer;
  } else if (strUser == 'maritime') {
    document.body.style.backgroundImage = "url('./imago/maritime.png')";
    document.body.style.cursor = "url('./imago/pescio_cursore.png'), auto";
  } else if (strUser == 'jungle') {
    document.body.style.backgroundImage = "url('./imago/jungle2.png')";
    document.body.style.cursor = "url('./imago/banana.png'), auto";
  } else {
    console.log('inside else');
  }
}

// NEW SYNTH PROJECT
// PLAY ONLY ONE TONE
//attach a click listener to a play button
document.body.addEventListener('click', function () {
  // SYNTH TON
  var synth = new Tone.Synth()
    .connect(vol)
    .connect(feedbackDelay)
    .connect(distortion);

  synth.triggerAttackRelease('G2', '12n');
});

// CHANGE VOLUME OF SINGLE TONE
let volSlider = document.getElementById('myVol');
volSlider.addEventListener('input', function () {
  volumeValue = volSlider.value;
  vol = new Tone.Volume(volumeValue).toDestination();
});

// EFFECTS
var volumeValue = -50;
var distortionValue = 0;
var delayLength = 0.4;

// VOLUME
var vol = new Tone.Volume(volumeValue).toDestination();

// EFFECTS section
var distortion = new Tone.Distortion(distortionValue).toDestination();
var feedbackDelay = new Tone.FeedbackDelay('8n', delayLength).toDestination();

// DISTORTION slider

let distSlider = document.getElementById('itFuzzy');
distSlider.addEventListener('input', function () {
  distortionValue = distSlider.value;
  distortion = new Tone.Distortion(distortionValue).toDestination();
});

// DELAY slider

let delSlider = document.getElementById('slapBack');
delSlider.addEventListener('input', function () {
  delayLength = delSlider.value;
  feedbackDelay = new Tone.FeedbackDelay(delayLength).toDestination();
});

// OSC
// const osc = new Tone.Oscillator().toDestination();
// const signal = new Tone.Signal({
//   value: "C4",
//   units: "frequency"
// }).connect(osc.frequency).connect(distortion);

const osc = new Tone.Oscillator({
  // type: "triangle",
  frequency: 120,
  volume: -2,
});
osc.toDestination();

// START OSC ON BUTTON CLICK
var soundStarted = false;

var oscButton = document.getElementById('osc-button');
oscButton.addEventListener('click', function () {
  // document.body.addEventListener('click',function(){

  if (soundStarted === false) {
    osc.start();
    soundStarted = true;
    console.log(soundStarted);
  } else {
    osc.stop();
    soundStarted = false;
    console.log(soundStarted);
  }
});

// CHANGE FREQUENCY on click of frequency button
var frequencyButton = document.getElementById('frequency-button');
frequencyButton.addEventListener('click', function () {
  osc.frequency.value = 220;
});

// CHANGE FREQUENCY ON MOUSE MOVE
document.body.addEventListener('mousemove', function (event) {
  var positionX = event.clientX;
  var positionY = event.clientY;

  // console.log(positionX)
  osc.frequency.value = scale(positionX, 0, window.innerWidth, 0, 550);
  osc.volume.value = scale(positionY, 0, window.innerHeight, 10, -10);
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const osc2 = new Tone.Oscillator({
  type: 'square',
  frequency: '230',
  volume: -40,
});
osc2.toDestination();

// START OSC 2 ON BUTTON CLICK
var soundStarted2 = false;
// LFO
lfo = new Tone.LFO('2hz', 50, 150, 9);
lfo.connect(osc2.frequency);

var oscButton2 = document.getElementById('osc-button2');
oscButton2.addEventListener('click', function () {
  if (soundStarted === false) {
    osc2.start();
    soundStarted = true;
    console.log(soundStarted2);
  } else {
    osc2.stop();
    soundStarted = false;
    console.log(soundStarted2);
  }
});

// initialize the noise and start
let noise = new Tone.Noise('pink');
// make an autofilter to shape the noise
let autoFilter = new Tone.AutoFilter({
  frequency: '0.05n',
  baseFrequency: 90,
  octaves: 1,
}).toDestination();
// connect the noise
noise.connect(autoFilter);
// start the autofilter LFO

// PINK NOISE BUTTON

var soundStarted3 = false;

var pinkButton = document.getElementById('pink-noise');
pinkButton.addEventListener('click', function () {
  if (soundStarted3 === false) {
    noise.start();
    soundStarted3 = true;
    console.log(soundStarted2);
  } else {
    noise.stop();
    soundStarted3 = false;
    console.log(soundStarted3);
  }
});

//ALERT MUTE

function muteButton() {
  alert('MUTING NOT ALLOWED!');
}
