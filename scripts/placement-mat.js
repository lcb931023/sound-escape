/* A plane we use to place sound spheres on */

AFRAME.registerComponent('placement-mat', {
  init: function () {
    this.el.addEventListener('click', function (e) {
      console.log(e.detail.intersection.point);
      var point = e.detail.intersection.point;
      var freq = (point.y + 20)*40;
      var vol = (point.x+5)*0.1
      synth.generateTone(freq, 1, vol, 0);
    });
  }
});
