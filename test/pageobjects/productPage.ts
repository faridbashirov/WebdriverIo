class ProductPage{

    public get AllProductCards(){
        return $$(".inventory_item")
    }
    public async allaproductNames(){
       const title= await this.AllProductCards  
      for (var i=0; i< title.length; i++){
        const card=await title[i].$(".inventory_item_name ")
        console.log(await card.getText())

    }}

    public async openProductDetail(index:number){
       const btn= (await this.AllProductCards[index].$(".inventory_item_name "))
       await btn.click()
      await browser.pause(4000)
    }
        
    public  async productDisplayed(){
      (await $("#inventory_container")).waitForDisplayed()
       await expect($("#inventory_container")).toBeDisplayed()
    }

}

export default new ProductPage()