import { expect, browser, $ } from '@wdio/globals'

describe.only('My Login application', () => {

   //  beforeEach(async() => {
   //      await browser.url("https://the-internet.herokuapp.com/upload")


   //  })
    it('My first test', async () => {
       await browser.url("https://example.com")
        

    //   old way
       await browser.pause(5000)
    // modern
     await expect(browser).toHaveTitleContaining("Example Domain")
     await expect(browser).toHaveUrlContaining("example.com")

     let  pageElement= await $("h1")

     await expect(pageElement).toExist()
     await expect(pageElement).toBeDisplayed()
     await expect(pageElement).toHaveTextContaining("Example")

    
       
    })
   //  it('Form and inputs', async () => {
   //      await browser.url("https://saucedemo.com")

   //      let username=await $("#user-name") 
   //      let password=await $("#password")
   //      let logibBtn=await $("#login-button")

   //      await username.setValue("standard_user")
   //      await password.setValue("secret_sauce")
   //      await logibBtn.click()


   //      let Products=await $("#inventory_container")

   //      await expect(Products).toBeDisplayed()


         
 
     
 
     
        
   //   })
   //   it('Select and checbox', async () => {
   //      await browser.url("https://devexpress.github.io/testcafe/example/")

   //      let select=await $("#preferred-interface")

   //      await select.selectByVisibleText("Both")
   //      await browser.pause(5000)
   //      let option=await $("option=Both")
   //      await expect(option).toBeSelected()



         
 
     
 
     
        
   //   })
     it.skip('execute javascript  code', async () => {
       const result=await browser.execute((a,b)=>{
        return a+b

       },
       5,
       10
       )

       await expect(result).toBe(15)})
     it.only('execute ASYNC javascript  code', async () => {
       const result=await browser.executeAsync((a,b,done)=>{
         setTimeout(() => {
            done(a+b)
            
         },3000)},
       5,
       10
       )

       await expect(result).toBe(15)})


})

