import {expect , test} from '@playwright/test'

test('Sign In button is visible', async({page})=>{
    await page.goto('https://binaryville.com/account/');
    const signInButton = page.getByRole('button' ,{name : 'sign in'});
    await expect(signInButton).toBeVisible();
});