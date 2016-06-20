// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ExampleController', function($scope, $cordovaCapture) {

  $scope.videoPath = null;

  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureImage = function() {
    var options = { limit: 1 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
      // Success! Image data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureVideo = function() {
    var tempVideoPath = $scope.videoPath;
    $scope.videoPath = null;
    var options = { limit: 1, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      console.log('ExampleController.captureVideo success: ' + JSON.stringify(videoData));
      $scope.videoPath = videoData[0].fullPath;
    }, function(err) {
      // User may have clicked 'Cancel'
      $scope.videoPath = tempVideoPath;
      console.log('ExampleController.captureVideo failed: ' + JSON.stringify(err));
    });
  }

})
