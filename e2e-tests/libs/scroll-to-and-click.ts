/// <reference path='../type_definitions/angular-protractor.d.ts' />

/**
 * scroll and click necessary due to: https://code.google.com/p/selenium/issues/detail?id=2766
 */
export default function scrollToAndClick(elementFinder: protractor.ElementFinder): webdriver.promise.Promise<void> {
    elementFinder.getLocation()
        .then(location => browser.executeScript('window.scrollTo('+location.x+','+location.y+');'));
    return elementFinder.click();
}