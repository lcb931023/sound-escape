/* A plane we use to place sound spheres on */

AFRAME.registerComponent('placement-mat', {
  init: function () {
    this.el.addEventListener('click', function (e) {
      console.log('I was clicked at: ', e.detail.intersection.point);
      console.log(e);
    });
  }
});
