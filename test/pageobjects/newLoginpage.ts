class LoginPage2{
    public get Username(){
        return $("#user-name")
    }
    public get Password(){
        return $("#password")
    }
    public get LoginBtn(){
        return $("#login-button")
    }
    public get Form(){
        return $("form")
    }


   public  async Login(username:string, password:string){
    await this.Form.waitForDisplayed()
    await this.Username.setValue(username)
    await this.Password.setValue(password)
    await this.LoginBtn.click()

      

   }
}

export default new LoginPage2()