# IonicCaptureVideoDemo
Ionic app that uses the Cordova Capture plugin to take a video and playback the taken video.

## Setup
1. ```$ git clone git@github.com:blakefaris/IonicCaptureVideoDemo.git```
1. ```$ cd IonicCaptureVideoDemo```
1. ```$ cordova plugin add cordova-plugin-media-capture```  
1. ```$ cordova platforms add ios```
1. ```$ cordova build ios```
1. Refer to **Running on iPhone**


## My Initial Project Setup

1. Setup blank Ionic app: http://ionicframework.com/getting-started/
1. Installed Cordova Capture Plugin: http://ngcordova.com/docs/plugins/capture/

## Adding Cordova Capture Support

http://ngcordova.com/docs/install/

http://ngcordova.com/docs/plugins/capture/


``` $ cordova platform list ```

Installed platforms:
  android 5.1.1
  ios 3.8.0
Available platforms:
  amazon-fireos ~3.6.3 (deprecated)
  blackberry10 ~3.8.0
  browser ~4.1.0
  firefoxos ~3.6.3
  osx ~4.0.1
  webos ~3.7.0

If this shows that iOS is only 3.8.0 update iOS.

``` $ cordova platform update ios ```

``` $ cordova platform list ```

Installed platforms:
  android 5.1.1
  ios 4.1.1
Available platforms:
  amazon-fireos ~3.6.3 (deprecated)
  blackberry10 ~3.8.0
  browser ~4.1.0
  firefoxos ~3.6.3
  osx ~4.0.1
  webos ~3.7.0

``` $ cordova plugin add cordova-plugin-media-capture ```

Include the source to index.html.

```
<script src="lib/ionic/js/ionic.bundle.js"></script>
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
```

Add ngCordova to angular.module within app.js

``` angular.module('starter', ['ionic', 'ngCordova']) ```

Building of iOS should work.

``` ionic build ios ```

### Running on iPhone ###
1. Use a USB cable and connect your iPhone to your computer
1. Open **/platforms/ios/IonicCaptureVideoDemo.xcodeproj**
1. For devices choose your iPhone
1. Click **Run**

#### Troubleshooting ####

##### Issue #####
If you experience issues once running the app on a physical device try removing and re-adding platforms.

##### Solution #####
http://stackoverflow.com/questions/20326504/cordova-ios-plugins-fail-after-building-unless-i-remove-platform-and-plugin-jso

1. rm -rf platforms/ios
1. rm plugins/ios.json
1. cordova platforms add ios
1. cordova build ios

A better solution is do the recommended 'config.xml' changes.

## Choosing an Existing Video
This repo allows you to take a video and have that video playback.  
If you want to choose and playback an existing video you'll want to use ``` cordova-plugin-camera ```.

Refer to my other GitHub repo for an example of choosing and playing back an existing video.
https://github.com/blakefaris/IonicCameraPluginDemo
