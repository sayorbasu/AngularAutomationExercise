/// <reference path='../../type_definitions/tsd/tsd.d.ts' />
/// <reference path='../../type_definitions/angular-protractor.d.ts' />

import Page from './page';

interface DialogPage extends Page {
openDialogPage():void;
clickAlertDialog(): void;
}
export default DialogPage;