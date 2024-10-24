import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import cartpage from '../pageobjects/cartpage.ts';
import SecurePage from '../pageobjects/secure.page';



Given(/^I am on the home page of app$/, async() => {
    await browser.url('https://www.demoblaze.com/');
   await browser.pause(3000);
   //await browser.maximizeWindow();


});

Then(/^select "([^"]*)"$/, async(args1) => {
   // await browser.pause(3000);
    await cartpage.samsung();
    await browser.pause(3000);
	
});

Then(/^clicks on add to cart$/, async() => {
    await cartpage.AddtoCart();



});
  

  
Then(/^place an order$/, async() => {
    await cartpage.PlaceOrder();
    
	
});



