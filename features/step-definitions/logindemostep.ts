import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import LoginDemo from '../pageobjects/logindemopage.ts';
import SecurePage from '../pageobjects/secure.page';

When(/^click on login button$/, async() => {
    await browser.url('https://www.demoblaze.com/');
    await browser.pause(3000);
    //await browser.maximizeWindow();
    await LoginDemo.loginbtn();

});

Then(/^enter username and password$/, async() => {
    await LoginDemo.enterUn();
	
});
