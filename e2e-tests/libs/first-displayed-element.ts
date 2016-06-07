/// <reference path='../type_definitions/angular-protractor.d.ts' />

/**
 * Given a ElementArrayFinder, find the first displayed element
 * WARNING: Make sure the returned element is present when using firstDisplayedElement.
 *          Index out of bound error will be thrown if the element is not present and
 *          Protractor attempts to find the element.
 *
 *          isElementPresent helper function can be used to determine if the element is present or not.
 *
 * @param elementArrayFinder is an ElementArrayFinder
 * @return an ElementFinder
 */

export default function firstDisplayedElement(elementArrayFinder: protractor.ElementArrayFinder): protractor.ElementFinder {
	return elementArrayFinder.filter(e => e.isDisplayed()).first();
}