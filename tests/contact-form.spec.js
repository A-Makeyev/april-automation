import { test } from '@playwright/test'
import ContactPage from '../pages/ContactPage'


test('Fill Contact Form', async ({ page }) => {
    const contactPage = new ContactPage(page)

    await contactPage.open()
    await contactPage.assertHeader()
    await contactPage.fillContactForm()
    await contactPage.submitForm()
    await contactPage.assertEmailError()
})