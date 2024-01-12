import HomePage from "../pageobjects/HomePage.ts"
import Loginpage from "../pageobjects/Loginpage.ts"
describe.skip("page object pattern", () => {

    before(async()=>{
        await  HomePage.visit()

    })

    it("Should not login with wrong credentials ", async() => {

        await HomePage.clickOnSingIn()
        await Loginpage.waitforloginForm()

        await Loginpage.login("test","test");
        await Loginpage.AssertloginPageError()

        await browser.pause(4000)


    })
})


