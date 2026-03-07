import { expect } from '@playwright/test'


export default class ContactPage {
    constructor(page) {
        this.page = page
        this.header = page.locator('(//div[contains(., "Contact Sales")])[1]')
        this.firstName = page.locator('(//input[@name="firstname"])[1]')
        this.lastName = page.locator('(//input[@name="lastname"])[1]')
        this.email = page.locator('(//input[@name="email"])[1]')
        this.title = page.locator('(//input[@name="title"])[1]')
        this.interestedIn = page.locator('(//select[@name="which_product_are_you_most_interested_in_"])[1]')
        this.message = page.locator('(//textarea[@name="topic_of_inquiry"])[1]')
        this.submitButton = page.locator('(//input[@type="submit"])[1]')
        this.emailErrorMessage = page.locator('//label[contains(@id, "email")]//..//label[contains(@class, "error-msg")]')

        this.testUser = {
            firstName: 'Melvin',
            lastName: 'McLovin',
            email: 'mclovin@gmail.com',
            title: 'Automation Engineer',
            interestedIn: 'Optimizer',
            message: 'Testing Contact Form'
        }
    }

    async open() {
        await this.page.goto('/contact')
    }

    async assertHeader() {
        await expect(this.header).toBeVisible()
    }

    async fillContactForm() {
        await this.firstName.fill(this.testUser.firstName)
        await this.lastName.fill(this.testUser.lastName)
        await this.email.fill(this.testUser.email)
        await this.title.fill(this.testUser.title)
        await this.interestedIn.selectOption(this.testUser.interestedIn)
        await this.message.fill(this.testUser.message)
    }

    async submitForm() {
        await this.submitButton.click()
    }

    async assertEmailError() {
        await expect(this.emailErrorMessage).toBeVisible()
        await expect(this.emailErrorMessage).toContainText('Please enter a different email address')
    }
}