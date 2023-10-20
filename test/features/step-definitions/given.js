import { Given } from '@wdio/cucumber-framework'
import Args from '../../helper/constants/argsConstants.js'

Given(/^LogIn to saucedemo web app$/, async () => {
  console.log()
  await browser.url('/')
  try {
    await $(`#user-name`).setValue(process.env.TEST_USERNAME)
    await $(`#password`).setValue(process.env.TEST_PASSWORD)
    await $(`#login-button`).click()
  } catch (err) {
    console.log('Error in first login. Retrying...')
    await browser.refresh()
    await browser.pause(2000)
    await $(`#user-name`).setValue(process.env.TEST_USERNAME)
    await $(`#password`).setValue(process.env.TEST_PASSWORD)
    await $(`#login-button`).click()
  }
})
