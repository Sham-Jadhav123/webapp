import { $, driver, browser } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'


class cartpage extends Page{

    public get item() {


        return $('a.hrefch*=Samsung galaxy s6')
    }
    public get addcart() {
        return $('a.btn.btn-success.btn-lg')
      // return $('//a[text()="Add to cart"]');
//return $('a.btn.btn-success.btn-lg:contains("Add to cart")');
    }
   
    public get cart1() {
        return $('//a[text()="Cart"]');
        
      
    }
    public get place() {

        return $('button.btn.btn-success');
    }
    public get cname() {
        return $('#name');
       
    }

    public get country() {
        return $('//input[@id="country"]');
    }
    public get city(){
        return $('//input[@id="city"]')
    }
    public get card() {
        return $('//input[@id="card"]')
    }
    public get month() {
        return $('//input[@id="month"]')
    }
    public get year() {
        return $('//input[@id="year"]')
    }
    public get continue() {
        return $('//button[normalize-space()="Purchase"]')
    }
    public get ok() {
        return $('//button[normalize-space()="OK"]')
    }

    public get log(){
        return $('//a[@id="login2"]')
    }

    public async samsung() {
        await this.item.waitForDisplayed({timeout:5000});
    //     const linkText = await this.item.getText();
    //    console.log(linkText);
       await this.item.click();
//await browser.pause(3000);
     await this.addcart.waitForDisplayed({timeout:4000});
    }

    public async AddtoCart() {

        //await browser.pause(30000);
        await this.addcart.click();
        //await browser.pause(30000);
        //await browser.dismissAlert();
        await this.cart1.waitForDisplayed({timeout:4000});
        await this.cart1.click();
        await this.place.waitForDisplayed({timeout:3000});
        await this.place.click();
        await browser.pause(3000);
        //await this.cname.setValue("rohit");

    }


   public async PlaceOrder() {

    await this.cname.waitForDisplayed({timeout:3000})
    await this.cname.setValue("rohit");
    await browser.pause(3000);
    await this.country.setValue("India");
    await browser.pause(3000);
    await this.city.setValue("pune");
    await browser.pause(3000);
    await this.card.setValue("ICICI");
    await browser.pause(3000);
    await this.month.setValue("08");
    await browser.pause(3000);
    await this.year.setValue("2024");
    await browser.pause(3000);
    await this.continue.click();
    await browser.pause(3000);
    await this.ok.click();
    await browser.pause(3000);



   }
   public async Login() {
    await this.log.click();
    await browser.pause(3000);
   }













}
export default new cartpage();