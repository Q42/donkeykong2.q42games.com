var sound = {
  effects: {
    'chain': 1,
    'chance': 1,
    'jump': 1,
    'key': 1,
    'miss': 1,
    'move': 1,
    'over': 1,
    'safe': 1,
    'tick_bottom': 1,
    'tick_top': 1
  },
  init: function () {
    for (var name in sound.effects) {
      var audio = new Audio('sound/snd_' + name + '.mp3');
      audio.preload = true;
      audio.load();
      sound.effects[name] = audio;
    }
  },
  init2: function () {
  },
  play: function (name) {
    var effect = sound.effects[name];
    effect.play();
  }
};