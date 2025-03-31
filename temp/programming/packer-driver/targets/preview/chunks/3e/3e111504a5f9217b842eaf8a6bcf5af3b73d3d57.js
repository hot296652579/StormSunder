System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, Node, assetManager, director, AudioMgr, _crd;

  _export("AudioMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d506fCKEkdMY7qkdZWU6ieq", "AudioMgr", undefined);

      /**
       * @en
       * This is a singleton class for audio play, can be easily called from anywhere in your project.
       * @zh
       * 这是一个用于播放音频的单件类，可以很方便地在项目的任何地方调用。
       */
      __checkObsolete__(['AudioClip', 'AudioSource', 'Node', 'assetManager', 'director']);

      _export("AudioMgr", AudioMgr = class AudioMgr {
        static get inst() {
          if (this._inst == null) {
            this._inst = new AudioMgr();
          }

          return this._inst;
        }

        // 是否开启音效
        constructor() {
          this._audioSource = void 0;
          this._bgMusicEnabled = true;
          // 是否开启背景音乐
          this._soundEffectsEnabled = true;
          // 创建一个节点作为 audioMgr
          var audioMgr = new Node();
          audioMgr.name = '__audioMgr__'; // 添加节点到场景

          director.getScene().addChild(audioMgr); // 标记为常驻节点，这样场景切换的时候就不会被销毁了

          director.addPersistRootNode(audioMgr); // 添加 AudioSource 组件，用于播放音频

          this._audioSource = audioMgr.addComponent(AudioSource);
        }

        get audioSource() {
          return this._audioSource;
        }

        get bgMusicEnabled() {
          return this._bgMusicEnabled;
        }

        get soundEffectsEnabled() {
          return this._soundEffectsEnabled;
        }
        /**
         * @en
         * Play short audio, such as strikes, explosions
         * @zh
         * 播放短音频，比如 打击音效，爆炸音效等
         * @param sound Clip or URL for the audio
         * @param volume 
         */


        playOneShot(sound, volume, bundleName) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (bundleName === void 0) {
            bundleName = 'resources';
          }

          if (!this._soundEffectsEnabled) {
            return; // 如果音效开关关闭，则不播放音效
          }

          if (sound instanceof AudioClip) {
            this._audioSource.playOneShot(sound, volume);
          } else {
            var bundle = assetManager.getBundle(bundleName);
            bundle.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.playOneShot(clip, volume);
              }
            });
          }
        }
        /**
         * @en
         * Play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound Clip or URL for the sound
         * @param volume 
         */


        play(sound, volume, bundleName) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (bundleName === void 0) {
            bundleName = 'resources';
          }

          if (!this._bgMusicEnabled) {
            return; // 如果背景音乐开关关闭，则不播放音乐
          }

          if (sound instanceof AudioClip) {
            this._audioSource.clip = sound;

            this._audioSource.play();

            this._audioSource.loop = true;
            this.audioSource.volume = volume;
          } else {
            if (this._audioSource.clip) {
              this._audioSource.stop();

              this._audioSource.clip = null;
            }

            var bundle = assetManager.getBundle(bundleName);
            bundle.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.clip = clip;

                this._audioSource.play();

                this._audioSource.loop = true;
                this.audioSource.volume = volume;
              }
            });
          }
        }
        /**
         * Stop the audio play
         */


        stop() {
          this._audioSource.stop();
        }
        /**
         * Pause the audio play
         */


        pause() {
          this._audioSource.pause();
        }
        /**
         * Resume the audio play
         */


        resume() {
          if (this._bgMusicEnabled) {
            this._audioSource.play();
          }
        }
        /**
         * Enable or disable background music
         * 开启或关闭背景音乐
         * @param enabled 
         */


        toggleBgMusic(enabled) {
          this._bgMusicEnabled = enabled;

          if (enabled) {
            this.resume(); // 开启时恢复播放背景音乐
          } else {
            this.stop(); // 关闭时停止背景音乐
          }
        }
        /**
         * Enable or disable sound effects
         * 开启或关闭音效
         * @param enabled 
         */


        toggleSoundEffects(enabled) {
          this._soundEffectsEnabled = enabled;
        }

      });

      AudioMgr._inst = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e111504a5f9217b842eaf8a6bcf5af3b73d3d57.js.map