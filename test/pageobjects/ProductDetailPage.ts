class ProductDetail{
    public get ProductDetail(){
        return  $(".inventory_details_container")
    }

    public async isPageDisplayed() {
          expect(this.ProductDetail).toBeDisplayed();
      }

}

export default new ProductDetail()