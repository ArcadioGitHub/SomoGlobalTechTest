class FormAuthentication {
   
    constructor(page) {
        this.page = page;
    }

    async getTitle() {
        return this.page.title();
    }

    async logIn(user, pass) {
        await this.page.type('input[id=username]', user); 
        await this.page.type('input[id=password]', pass); 
        await this.page.click('button[class=radius]');
    }

    async checkingSuccessMessage(){
        await this.page.waitForSelector('div[id=flash]')
        let element = await this.page.$('div[id=flash]')
        let value = await this.page.evaluate(el => el.textContent, element)
        return value
    }

}

module.exports = FormAuthentication;