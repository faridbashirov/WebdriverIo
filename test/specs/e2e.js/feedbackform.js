describe('Fedback form feature', () => {
    before(async()=>{
        await browser.url("http://zero.webappsecurity.com/feedback.html")

    })


    it ("CHECK if the Clear is works", async() => {
        (await $("form")).waitForDisplayed()
        const name=await $("#name")
        await name.setValue("text")
        const subject= await $("#subject")
        await subject.setValue("text")
        const message= await $("#comment")
        await message.setValue("text")


        await $("input[type=reset]").click()
        await  expect(name).toHaveValue("")
        await  expect(subject).toHaveValue("")
        await  expect(message).toHaveValue("")
        
        






    })
    
});
