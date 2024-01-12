describe.skip("Login Flow",()=>{

    before(async()=>{
        await browser.url("http://zero.webappsecurity.com")
        

    })
    it('Should not login with wrong username and password and gives error message', async() => {

       const SignInBtn= await $("#signin_button")
       await SignInBtn.waitForDisplayed()
       await SignInBtn.click()
       await $("#login_form").waitForDisplayed()
       const loginInput= (await $("#user_login")).setValue("test")
       const Password= await $("#user_password").setValue("test")
       const submitBtn= await $("input[type=submit]").click()
       const errrorMessage= await $(".alert-error")

       await expect(errrorMessage).toHaveTextContaining("Login and/or password are wrong")

       

        
    });

    it('Reset Account Password', async() => {
        const email="test@example.com"

        await $("*=Forgot").click()

        await $("#user_email").waitForDisplayed()
        await $("#user_email").setValue(email)
        await $("input[type=submit]").click()
        const message= await $(".span6")
        await expect(message).toHaveTextContaining(`email: ${email}`)







        // #click reset button
        // Fill form


        
    });
    
    

})