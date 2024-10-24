import { $, driver, browser } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'



class Demo extends Page{

    public get contact() {
        return $('=Contact');
       // return $('a.nav-link');
    }
//get email(){return $('#recipient-email')}
    
    public get email() {
        return $('#recipient-email')
    }
    public get cname() {
        return $('#recipient-name')
    }
    public get msg(){
        return $('#message-text')
    }
    public get send(){
        return $('.btn.btn-primary')
    }

    public async Democlick() {
       await this.contact.waitForDisplayed({timeout:5000})
        await this.contact.click();
       


    }
    public async Entermail() {
        await this.email.setValue("sham@1234");
        await browser.pause(3000);
    }
    public async Name() {
        await this.cname.setValue("Shyam Jadhav1");
       //await driver.pause(2000);
      await browser.pause(3000);
     
      await this.msg.waitForDisplayed({ timeout: 500000 });
      

    }
    public async Entermsg() {
        await this.msg.setValue("Testing Information");
       // await this.send.waitForDisplayed({ timeout:  });
    }
    
     public async Sendmsg() {

       // await browser.pause(3000);
        await this.send.click();
      
       await browser.pause(3000);
    
     }






}
export default new Demo();