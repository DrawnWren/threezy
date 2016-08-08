var audioCtx = new (AudioContext || webkitAudioContext)();
var audioElement = document.getElementById('audioElement');
audioElement.crossOrigin = "anonymous";
var audioSrc = audioCtx.createMediaElementSource(audioElement);

var analyser = audioCtx.createAnalyser();

audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);

var frequencyArr = new Uint8Array(100);

//##FIXME## Function only works for enemies currently,
//need to refactor to work w/ geometry
var audioRadius = function (enemArr) {
  var newE = enemArr.slice();
  analyser.getByteFrequencyData(frequencyArr);
  var split =  frequencyArr.length / newE.length; //length of array splits to make

  for (i = 0; i < newE.length; i++) {
    var s = frequencyArr.slice(i * split, (i + 1) * split);
    newE[i].radius = freqAvg(s);
  }

  return newE;
};

var updateAudioArr = function () {
  analyser.getByteFrequencyData(frequencyArr);
};

