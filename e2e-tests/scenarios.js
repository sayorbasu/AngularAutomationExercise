'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('automation exercises app', function() {


  it('should have a heading', function() {
    browser.driver.manage().deleteAllCookies();
    browser.ignoreSynchronization = false;
    browser.get('index.html#/gettingstarted');
    var heading = element(by.id('header'));
    var headingText = heading.getText();
    expect(headingText).toBe("Test Automation Exercises");
  });
});
