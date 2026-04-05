import { test as base, expect } from '@playwright/test';

// ✅ Define your data type
type TestData = {
  email: string;
  password: string;
};

// ✅ Extend with type
export const test = base.extend<{
  testData: TestData;
  authenticatedUser: void; 
}>({
  testData: async ({}, use) => {
    const data = {
      email: 'test@example.com',
      password: 'pass123',
    };
    await use(data);
  },

  authenticatedUser : [
  async ({ page, testData }, use) => {
  await page.goto ("https://binaryville.com/account/");
  const emailInput = page.getByRole('textbox', {name :'Email'});
  await emailInput.fill(testData.email);
  const passwordInput = page.getByRole('textbox', {name : "Password"});
  await passwordInput.fill(testData.password);
  const signInButton = page.getByRole('button',{name : 'Sign in'});
  await signInButton.click();
  await use();
  }, 
  {auto : true}
],
});

test("Should login with test data", async ({page, testData})=>{

  const url = page.url();
  expect (url).toContain(testData.password);

})