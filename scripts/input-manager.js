/* Test: when you click on screen, this reacts */

AFRAME.registerComponent('input-manager', {
  init: function () {
    this.clickHandler = function (e) {
      console.log("AAAAAA", e);
    };
    var sceneEl = document.querySelector('a-scene');
    sceneEl.addEventListener('click', this.clickHandler);
  },
  remove: function () {
    var sceneEl = document.querySelector('a-scene');
    sceneEl.removeEventListener('click', this.clickHandler);
  }
});
