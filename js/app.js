

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', async () => {

    /*SET PAGE TITLE FROM CONFIG*/
    document.title = CONFIG.title + ' — Arcade Hackathon';

    /*INIT AUDIOdefault:muted*/
    Audio.init();

    /*INIT GAMEPAD POLLING*/
    Gamepad.start();

    /*BIND SFX TOGGLE BUTTON*/
    const sfxBtn = Utils.$('sfxToggle');
    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        Audio.unlock();
        const muted = Audio.toggleMute();
        sfxBtn.classList.toggle('muted', muted);
        sfxBtn.textContent = muted ? '🔇 SFX' : '🔊 SFX';
        
        if (!muted) {
          Audio.playHover();
          Audio.playAmbient(); // Start looping theme
        } else {
          Audio.stopAmbient(); // Stop theme if muted
        }
      });
    }

    /* CRT Power-On Boot */
    await CRT.boot();

    /*Loading Screen */
    LoadingScreen.start(() => {

      /*Press Start Screen */
      StartScreen.show(() => {

        /*Main Menu */
        MenuScreen.show();
      });
    });

  });
})();
