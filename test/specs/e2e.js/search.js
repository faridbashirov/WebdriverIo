describe.only('Searhc flow', () => {

    before( async()=>{
       
            await browser.url("http://zero.webappsecurity.com")})

    it('Shoul serach for the given value', async() => {
      await $("#searchTerm").waitForDisplayed()
      await $("#searchTerm").setValue("text")
       await browser.keys("Enter")

       const result=await $("h2")
       await expect(result).toBeExisting()
       await expect(result).toHaveTextContaining("Search Results")


        
    });
    
    
});
