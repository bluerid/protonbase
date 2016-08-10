var express = require('express');
var router = express.Router();
var firebase = require('firebase');

//var models = require('../models');
var controllers = require('../controllers/FoodController.js');

var config = {
  apiKey: "AIzaSyDIu-9CjiVk0bDky5Nl7I_ggYyG_5FB7Nc",
  authDomain: "proton-bc053.firebaseapp.com",
  databaseURL: "https://proton-bc053.firebaseio.com",
  storageBucket: "proton-bc053.appspot.com",
};

var app = firebase.initializeApp(config);
var database = firebase.database();

// Get a reference to the database service
//var protondb = firebase.database().ref('users/1');
/*
function writeUserData() {
  firebase.database().ref('invite/').push().set({
    username:'SatanLawyer',
    email:'powerLabyrinth@yahoo.com',
    profile_picture:'https://firebase.google.com/_static/053546c383/images/firebase/clusterone.png'
  });
}

function removePost(userId) {
	firebase.database().ref().child('user-posts/'+userId).remove();
}

function writeNewPost(userId) {
  // A post entry.
  var postData = {
    body: 'Object Metric',
    title: 'Californication',
    author: 'Summa'
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + userId + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
*/

/* GET home page. */
router.get('/', function(req, res, next) {
	var FirebaseContent = {};
	//writeNewPost(1);
	//protondbRef.set({myData: {'sandra':'bullock'} })
  database.ref("/dinosaurs").push({
      type_species: "Zhejiangosaurus lishuiensis",
      genus: "Zhejiangosaurus",
      subfamily: "-",
      family: "Nodosauridae",
      order: "Ornithischia",
      phylum: "Chordata",
      kingdom: "Animalia"
  });
  res.render('index', { title: 'Express' });
});

router.get('/create-user', function(req, res, next){
  res.render('create', { title: 'Create user' });
});

router.get('/food/create', function(req, res, next){
  controllers.get_index(req, res); 
  return false;
});

router.get('/level', function(req, res, next){
  /*
  database.ref("/dinosaurs").once("value").then(function(snapshot) {
    var key = snapshot.key; 
    console.log(snapshot.val());
  });
  
  app.on('child_added', function(message) {
      var message = message.val();
      $.notification(message.message);
  });
  */
  res.render('index', { title: 'Level' });
});

module.exports = router;
