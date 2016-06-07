/// <reference path='../typings/tsd/node/node.d.ts' />
/// <reference path='../typings/tsd/jasmine/jasmine.d.ts' />
/// <reference path='../typings/custom/angular-protractor.d.ts' />

import AlertDialog from '../page_objects/alertDialog.page';
import AlertDialogImpl from '../page_objects/alertDialog.page.impl';

const alertDialog: AlertDialog = new AlertDialogImpl;


describe('click alert dialog', function() {

  it('should have a heading', function() {
    console.log("HI!");
    browser.get('http://localhost:8000/#/exercise1/partA');
    browser.ignoreSynchronization = true;
    alertDialog.clickDialog();
  });
});
