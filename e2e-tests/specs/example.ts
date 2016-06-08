/// <reference path='../typings/tsd/node/node.d.ts' />
/// <reference path='../typings/tsd/jasmine/jasmine.d.ts' />
/// <reference path='../typings/custom/angular-protractor.d.ts' />

import DialogExercise from '../page_objects/dialogexercise.page';
import DialogExerciseImpl from '../page_objects/DialogExercise.page.impl';
import JbrandProduct from '../page_objects/jbrandProduct.page'; 
import JbrandProductImpl from '../page_objects/jbrandProduct.page.impl'; 

const dialogExercise: DialogExercise = new DialogExerciseImpl;
const jbrandProductPage: JbrandProduct = new JbrandProductImpl;


xdescribe('click alert dialog', function() {

  xit('click alert dialog box', function() {
    console.log("HI!");
    browser.ignoreSynchronization = true;
    dialogExercise.open();
    dialogExercise.clickDialog();
  });
  
});
  
  
  describe('J Brand tests', function() {
    
    it('click color swatch and check that image on page changes', function() {
      jbrandProductPage.open();
   });
  
});
  

