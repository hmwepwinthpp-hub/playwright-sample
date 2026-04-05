import {test ,expect} from '../page-objects/fixtures'

test ('should login using POM' , async({page, loginPage})=> {
  //  const loginPage = new LoginPage(page);

    await page.goto ("https://binaryville.com/account/");
    await loginPage.login('test@example.com', 'pass123');
    expect(await page.url()).toContain('pass123');

});