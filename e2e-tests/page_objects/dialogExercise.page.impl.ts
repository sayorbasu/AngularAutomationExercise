// / <reference path="../typings/custom/angular-protractor.d.ts" />
// / <reference path="../typings/tsd/jasmine/jasmine.d.ts" />
import DialogExercise from './dialogExercise.page';

class DialogExerciseImpl implements DialogExercise {
    private alertDialogButton: protractor.ElementFinder = $('#alertDialog');
    
    public open(): void {
        browser.get('http://localhost:8000/#/exercise1/partA');
    }
    
    public clickDialog(): void {
        browser.wait(protractor.until.elementLocated(this.alertDialogButton.locator())).then(() => {
            this.alertDialogButton.click();
        });
    }
}
export default DialogExerciseImpl;