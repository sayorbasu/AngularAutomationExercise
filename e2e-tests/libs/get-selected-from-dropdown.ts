/// <reference path='../type_definitions/angular-protractor.d.ts' />

/**
 * Get the selected option from a select dropdown element
 * @param dropdown the select element
 * @return the selected option
 */
export default function getSelectedFromDropdown(elementFinder: protractor.ElementFinder): protractor.ElementFinder {
    return elementFinder.$('option[selected="selected"]');
}