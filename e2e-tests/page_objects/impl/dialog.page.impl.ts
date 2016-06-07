/// <reference path='../../type_definitions/angular-protractor.d.ts' />
import firstDisplayedElement from '../../libs/first-displayed-element';
import DialogPage from '../interfaces/dialog.page';

class DialogPageImpl implements DialogPage {
public dialogBoxElements: protractor.ElementArrayFinder = ($$('.md-primary md-raised md-button md-ink-ripple'));

public openDialogPage():void {
browser.driver.manage().deleteAllCookies();
browser.get('/index.html#/exercise1/partA');
}

public clickAlertDialog(): void {
this.dialogBoxElements.get(0).click();
}
}
export default DialogPageImpl;