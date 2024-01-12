class LoginPage{

    public  get LoginForm(){
        return $("#login_form")
    }
    public  get Username(){
        return $("#user_login")
    }
    public  get Password(){
        return $("#user_password")
    }
    public  get SigninBtn(){
        return $("input[type=submit]")
    }

    public async waitforloginForm(){
        (await this.LoginForm).isDisplayed()
    }
    public  get errorMessage(){
        return $(".alert-error")

    }
    public async AssertloginPageError(){
        await expect(this.errorMessage).toHaveTextContaining("Login and/or password are wrong")
    }

    public async login (username:string, password:string){
        await (await this.Username).setValue(username)
        await (await this.Password).setValue(password)
        await (await this.SigninBtn).click()



}




}

export default new LoginPage()