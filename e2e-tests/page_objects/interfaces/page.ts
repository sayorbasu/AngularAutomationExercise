/// <reference path='../../type_definitions/angular-protractor.d.ts' />

interface Page {
	open?(): void;
    waitUntilLoaded(timeout?: number): webdriver.promise.Promise<Object>;
}
export default Page;