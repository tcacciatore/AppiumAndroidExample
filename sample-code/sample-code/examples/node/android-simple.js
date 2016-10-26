"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("android simple", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = _.clone(require("./helpers/caps").android19);
    desired.app = require("./helpers/apps").androidTestApp;
    
    return driver
      .init(desired)
      .setImplicitWaitTimeout(3000);
  });

  after(function () {
    return driver.quit()
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  // Press the '+' button.
  // Then type 'title 4'.
  // Type 'description 4'.
  // Finally press the 'save' button
  it("should create a task", function () {
    return driver
      .elementById('addTaskButton')
        .click()

      .elementById('taskTitleEditText')
        .sendKeys("title 4")
        .text()

        .elementById('taskDescriptionEditText')
        .sendKeys("description 4")
        .text().back()

        .elementById('saveTaskButton')
        .click()

      
  });


    // Delete the title, and type 'title 1 modified'.
    // Then delete the description, and type 'description 1 modified'.
    // Then press back to remove the keyboard.
    // Finally press the save button and wait 5000 ms before ending the test.
    it("should modify the first task", function () {
    return driver
      .elementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.support.v4.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.widget.RelativeLayout[1]/android.widget.ListView[1]/android.widget.TextView[1]").click()

      .elementById('taskTitleEditText')
        .sendKeys("title 1 modified")
        .text()

        .elementById('taskDescriptionEditText')
        .sendKeys("description 1 modified")
        .text().back()

        .elementById('saveTaskButton')
        .click().sleep(5000);
  });

// Display the navigation drawer during 3000 ms.
// Then press back button.
// Finally wait 3000 ms before ending the test.
  it("should toggle navigation drawer", function () {
    return driver
      .elementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.support.v4.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.widget.LinearLayout[1]/android.view.ViewGroup[1]/android.widget.ImageButton[1]").click()
        .sleep(3000)
        .back().sleep(3000);    
  });

  
});
