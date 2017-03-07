/* A plane we use to place sound spheres on */

AFRAME.registerComponent('placement-mat', {
  pressHandler: function (e) {
    console.log(e);
    // handles the press better than white house
    var point = e.detail.intersection.point;
    // var freq = (point.y + 20)*40;
    // var vol = (point.x+5)*0.1
    // synth.generateTone(freq, 1, vol, 0);

    var sphere = document.createElement('a-sphere');
    sphere.setAttribute('color', '#FFFFFF');
    sphere.setAttribute('radius', '0.1');
    sphere.setAttribute('position', `${point.x} ${point.y} ${point.z}`);
    var scene = document.querySelector('a-scene');
    scene.appendChild(sphere);
  },
  init: function () {
    this.el.addEventListener('mousedown', this.pressHandler);
    this.el.addEventListener('touchstart', this.pressHandler);
  }
});
