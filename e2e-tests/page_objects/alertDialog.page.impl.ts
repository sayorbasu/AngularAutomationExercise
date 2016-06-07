// / <reference path="../typings/custom/angular-protractor.d.ts" />
// / <reference path="../typings/tsd/jasmine/jasmine.d.ts" />
import AlertDialog from './alertDialog.page';

class AlertDialogImpl implements AlertDialog {
    private alertDialogButton: protractor.ElementFinder = $('#alertDialog');
    
    
    public clickDialog(): void {
        
        browser.wait(protractor.until.elementLocated(this.alertDialogButton.locator())).then(() => {
            this.alertDialogButton.click();
        });
    }
}
export default AlertDialogImpl;