/// <reference path='../type_definitions/angular-protractor.d.ts' />

export default function expectPromiseToThrow(promise: webdriver.promise.Promise<any>): void {
    promise.then(() => {
        throw("Expected promise to throw an exception, but didn't");
    }).thenCatch(error => {});
}