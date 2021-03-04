const FormAuthenticacion = require('../pageObjects/formAuthentication.js')
const Iframe = require('../pageObjects/iFrame.js')
const AddRemoveElements = require('../pageObjects/addRemoveElements.js')
const Notification = require('../pageObjects/notificationMassages.js')
const assert = require('assert')
const puppeteer = require('puppeteer');

let browser;
let page;

beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false })
    page = await browser.newPage();
});

afterEach(async () => {
    if (browser) {
        await browser.close();
    }
});

describe('LogIn on Form Authentication', () => {
    it("LogIn on Form Authentication", async function () {
        //Given: I enter on The Internet Page
        await page.goto('http://the-internet.herokuapp.com/login');
        const formAuthenticacion = new FormAuthenticacion(page);
        //And: I check I am on the right Page
        assert.strictEqual(await formAuthenticacion.getTitle(), 'The Internet');
        //When: I logIn on Internet Page
        await formAuthenticacion.logIn('tomsmith', 'SuperSecretPassword!');
        //Then: I check I get the Success flash Message
        assert.notStrictEqual(await formAuthenticacion.checkingSuccessMessage(), 'You logged into a secure area!')
        await page.screenshot({ path: 'screenshots/logInSuccess.png' });
    });
});

describe('Switch To Iframe', () => {
    it("Switch To Iframe", async function () {
        //Given: I enter on The Page
        await page.goto('http://the-internet.herokuapp.com/iframe');
        const iframe = new Iframe(page);
        //When I switch to Iframe and I type any text
        await iframe.switchToFrame('Arcadio De Jesus Buelvas Hernandez');
        await page.screenshot({ path: 'screenshots/switchToFrame.png' });
    });
});

describe('Add/Remove Elements', () => {
    it("Add/Remove Elements", async function () {
        //Given: I enter on The Page
        await page.goto('http://the-internet.herokuapp.com/add_remove_elements/');
        const addRemove = new AddRemoveElements(page);
        //When I add a element
        await addRemove.addElements();
        await page.screenshot({ path: 'screenshots/addElement.png' });
        //Then I Remove the element
        await addRemove.removeElements();
        await page.screenshot({ path: 'screenshots/deleteElement.png' });
    });
});

describe('Notification Message', () => {
    it("Notification Message", async function () {
        //Given: I enter on The Page
        await page.goto('http://the-internet.herokuapp.com/notification_message_rendered');
        const notificationMessage = new Notification(page);
        const formAuthenticacion = new FormAuthenticacion(page);
        //When I click on the link to load the message
        await notificationMessage.clickToLoadTheFlashMessage();
        //Then I check the Success flash Message
        assert.notStrictEqual(await formAuthenticacion.checkingSuccessMessage(), 'Action unsuccesful, please try again!')
        await page.screenshot({ path: 'screenshots/noticationFlashMessage.png' });
    });
});






