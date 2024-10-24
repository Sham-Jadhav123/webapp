import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import Demo from '../pageobjects/demopage.ts';
import SecurePage from '../pageobjects/secure.page';

Given(/^I am on the home page page$/, async() => {
	
    await browser.url('https://www.demoblaze.com/');
	await browser.pause(3000)
	await Demo.Democlick()
	
	
});



  Then(/^enter emailid$/, async() => {
	await Demo.Entermail();

});

Then(/^enter contact number$/,async() => {
	await Demo.Name();
	
});

Then(/^enter msg$/, async() => {
	await Demo.Entermsg();
	
});

Then(/^clicks on send msg$/, async() => {
	await Demo.Sendmsg();
	
});

// Then(/^I should see a flash message saying <message>$/, async(message) => {
// 	await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });

