// The controller needs access to both the model and the view...so let's import them
import HikeModel from './model.js';
import HikesView from './view.js';

// Hike controller
export default class hikesController {
    constructor(parentId) {
      this.parentElement = document.getElementById(parentId); 
      // this is how our controller will know about the model and view...we add them right into the class as members.
      this.hikeModel = new model();
      this.hikesView = new view(parentId);
    }
    
    showHikeList() {
      //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    }
  
    showOneHike(hikeName) {
      // use this when you need to show just one hike...with full details
      
    }
    addHikeListener() {
      // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
     
    }
  }