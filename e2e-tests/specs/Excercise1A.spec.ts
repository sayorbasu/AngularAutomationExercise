import DialogPage from "../page_objects/interfaces/dialog.page";

describe('clicking alert dialog box',()=> {
let dialogPage:DialogPage;

it('should open a dialogbox', () => {
dialogPage.openDialogPage();
dialogPage.clickAlertDialog();
}))