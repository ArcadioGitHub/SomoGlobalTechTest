class IFrame {

    constructor(page) {
        this.page = page;
    }
    
    async switchToFrame(textToType) {
        const frameHandle = await this.page.$('iframe[id=mce_0_ifr]');
        const frame = await frameHandle.contentFrame();
        const input = await frame.$('body[id=tinymce]');
        await input.click({ clickCount: 3 })
        await input.type(textToType);
    }  

}

module.exports = IFrame;