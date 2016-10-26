# Appium with Android (node) 

This repository contains node scripts used for testing android apps with Appium.

### Prerequisites

Node must be installed.

Appium must be installed : 
```
npm install -g appium
```
Android SDK must be installed and configured.

## Running the tests

* Open a terminal.
* Type 'appium'

* Open another terminal.
* Install 'http-server' : 
```
npm install -g http-server
```
* Go to appium/sample-code/sample-code/apps
* Type « http-server »

* Open another terminal
* Go to /appium/sample-code/sample-code/examples/node
* Type « mocha android-simple.js « 

## Authors

* **Thomas Cacciatore (https://twitter.com/tom_cacciatore)**

## License

This project is licensed under the MIT License.