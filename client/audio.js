var audioInit = function () {
  window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  window.audioElement = document.getElementById('audioElement');
  window.audioElement.crossOrigin = "anonymous";
  window.audioSrc = audioCtx.createMediaElementSource(window.audioElement);

  window.analyser = window.audioCtx.createAnalyser();

  window.audioSrc.connect(window.analyser);
  window.audioSrc.connect(window.audioCtx.destination);

  window.frequencyArr = new Uint8Array(100);
};

var updateAudioArr = function () {
  window.analyser.getByteFrequencyData(window.frequencyArr);
};
