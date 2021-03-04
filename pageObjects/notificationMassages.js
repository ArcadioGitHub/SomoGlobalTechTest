class NotificationMassage {
   
    constructor(page) {
        this.page = page;
    }

    async clickToLoadTheFlashMessage() {
        let clickHere = '//a[text()="Click here"]';
        const clickHereBtn = await this.page.waitForXPath(clickHere);
        await clickHereBtn.click();
    }

    

  
}

module.exports = NotificationMassage;