
import newLoginpage from "../pageobjects/newLoginpage.ts"
import productPage from "../pageobjects/productPage.ts"
import ProductDetailPage from "../pageobjects/ProductDetailPage.ts"
describe.only("Page object model",()=>{

    before(async()=>{
        await browser.url("https://www.saucedemo.com")

    })

    it("test to succes login", async()=>{
        await newLoginpage.Login("standard_user","secret_sauce")
        await productPage.productDisplayed()
        await productPage.allaproductNames()

       
})
it("test to get product detail page", async()=>{
    await productPage.productDisplayed()
    await productPage.allaproductNames()
    await productPage.openProductDetail(1)
    ProductDetailPage.isPageDisplayed()
    
   
})

})