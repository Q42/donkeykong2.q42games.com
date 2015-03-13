var sound = {
  audio: 0,
  stopTOH: 0,
  ready: false,
  effects: {
    'chain': [0.1, 0.2],
    'chance': [0.27, 1.5],
    'jump': [2.3, 0.2],
    'key': [2.44, 0.25],
    'miss': [2.55, 1.34],
    'move': [3.9, 0.12],
    'over': [4.1, 0.43],
    'safe': [4.6, 0.85],
    'tick_bottom': [5.51, 0.1],
    'tick_top': [5.65, 0.1]
  },
  init: function () {
    sound.audio = document.createElement("audio");
    sound.audio.src = "sound/sound.wav";
  },
  init2: function () {
    sound.audio.play();
    sound.audio.pause();
    sound.init3();
  },
  init3: function () {
    try {
      sound.audio.currentTime = 0;
      sound.ready = true;
    } catch (e) {
      setTimeout(sound.init3, 1000);
    }
  },
  play: function (name) {
    if (!sound.ready) return;
    var effect = sound.effects[name];
    sound.stop();
    sound.stopTOH = setTimeout(sound.stop, effect[1] * 1000);
    sound.audio.currentTime = effect[0];
    sound.audio.play();
  },
  stop: function () {
    clearTimeout(sound.stopTOH);
    sound.audio.pause();
  }
};