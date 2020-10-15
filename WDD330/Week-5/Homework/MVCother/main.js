import HikesController from './MVCother/controller.js';
//on load grab the array and insert it into the page
const myHikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
});
 