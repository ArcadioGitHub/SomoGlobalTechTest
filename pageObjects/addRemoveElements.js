class AddRemove {
   
    constructor(page) {
        this.page = page;
    }

    async addElements() {
        let addButton = '//button[text()="Add Element"]';
        const clickOnAddButton = await this.page.waitForXPath(addButton);
        await clickOnAddButton.click();
    }

    async removeElements() {
        let addButton ='//button[text()="Delete"]';
        const clickOnDeleteButton = await this.page.waitForXPath(addButton);
        await clickOnDeleteButton.click();
    }
}

module.exports = AddRemove;