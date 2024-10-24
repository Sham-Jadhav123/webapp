import { $, driver, browser } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'



class LoginDemo extends Page {


    public get clickbtn() {
        
        return $('//a[@id="login2"]')
    }

    public get Username() {
        return $('//input[@id="loginusername"]')
    }
    public get password() {
        return $('//input[@id="loginpassword"]')
    }
     public get okk() {
        return $('//button[normalize-space()="Log in"]')
     }


    public async loginbtn() {
        await browser.pause(3000)
        await this.clickbtn.click();
    }
    public async enterUn() {
        await browser.pause(3000)
        await this.Username.setValue("1234");
        await browser.pause(3000)
        await this.password.setValue("1234");
        await browser.pause(3000)
        await this.okk.click();
        await browser.pause(3000)

    }
}
export default new LoginDemo();