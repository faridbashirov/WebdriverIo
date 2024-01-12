import { expect, browser, $ } from '@wdio/globals'
describe('Advance testing', () => {

    beforeEach(async() => {
        await browser.url("https://the-internet.herokuapp.com/upload")


    })

    it('file uplaod', async() => {
        // await browser.url("https://the-internet.herokuapp.com/upload")
        const filepath="./farid.png"
        const remotefilePath=await browser.uploadFile(filepath)

        let file=await $("#file-upload")
        await file.setValue(remotefilePath)
        let btn=await $("#file-submit")
        btn.click()
        await browser.pause(5000)
        
    });
    it('file uplod1', async() => {
        // await browser.url("https://the-internet.herokuapp.com/upload")
        const filepath="./farid.png"
        const remotefilePath=await browser.uploadFile(filepath)

        let file=await $("#file-upload")
        await file.setValue(remotefilePath)
        let btn=await $("#file-submit")
        btn.click()
        await browser.pause(5000)
        
    });
    it('file uplod2', async() => {
        // await browser.url("https://the-internet.herokuapp.com/upload")
        const filepath="./farid.png"
        const remotefilePath=await browser.uploadFile(filepath)

        let file=await $("#file-upload")
        await file.setValue(remotefilePath)
        let btn=await $("#file-submit")
        btn.click()
        await browser.pause(5000)
        
    });

    it('Change Seesion', async() => {

        await browser.reloadSession()
        
    });

    it('Create and  Switch window', async() => { 
        await browser.url("https://google.com")
        await browser.pause(5000)
        await browser.newWindow("https://youtube.com")
        await browser.pause(5000)
        await browser.switchWindow("google")
        await browser.pause(5000)
        
    });
    it.only('network Throtlinh', async() => { 
        // await browser.throttleNetwork("Regular2G")
        // await browser.url("https://youtube.com")
       
        // await browser.throttleNetwork("Regular3G")
        await browser.url("https://youtube.com")
        await browser.newWindow("https://saucedemo.com")
        

        let username=await $("#user-name") 
        let password=await $("#password")
        let logibBtn=await $("#login-button")

        await username.setValue("standard_user")
        await password.setValue("secret_sauce")
      
        await logibBtn.click()
        await browser.pause(5000)
       
        // await input.setValue("farid")
        
     

        // await browser.throttleNetwork("Regular4G")
        // await browser.url("https://youtube.com")
        // browser.pause(10000)
        
        
       
        
    });
    
    
    
});
