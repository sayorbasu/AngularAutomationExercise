// / <reference path="../typings/custom/angular-protractor.d.ts" />
// / <reference path="../typings/tsd/jasmine/jasmine.d.ts" />
import JbrandProduct from './jbrandProduct.page';

class JbrandProductImpl implements JbrandProduct {
    //private alertDialogButton: protractor.ElementFinder = $('#alertDialog');
    
    public open(): void {
        browser.get('https://www.jbrandjeans.com/sadey-slim-straight-in-old-rose/0');
    }
    
    public clickImageSwatch(): void {
        //Implement method here
    }
    
    
}
export default JbrandProductImpl;