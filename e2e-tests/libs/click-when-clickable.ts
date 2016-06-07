/// <reference path='../type_definitions/angular-protractor.d.ts' />

import scrollToAndClick from './scroll-to-and-click';

function clickWhenClickable(elementFinder: protractor.ElementFinder): webdriver.promise.Promise<void> {
    'use strict';
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementFinder));
    return scrollToAndClick(elementFinder);
}
export default clickWhenClickable;
