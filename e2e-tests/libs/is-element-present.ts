/// <reference path='../type_definitions/angular-protractor.d.ts' />

/**
 * A replacement for Protractor's built-in isPresent.
 * Protractor's isPresent does not work with ElementArrayFinder.first().
 * It throws an index out of bounds exception if the element is not present.
 * http://stackoverflow.com/questions/30249963/
 */
export default function isElementPresent(elementFinder: protractor.ElementFinder): webdriver.promise.Promise<boolean> {
    var deferred: webdriver.promise.Deferred<boolean> = protractor.promise.defer();

    elementFinder.isPresent()
        .then(isPresent => deferred.fulfill(isPresent))
        .thenCatch(() => deferred.fulfill(false));

    return deferred.promise;
}