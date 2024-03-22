import { Given } from '@wdio/cucumber-framework'
import context from '../../helper/context.js'
import BasePage from '../../page-objects/basepage.js'
import helperFunctions from '../../helper/helperfunctions.js'

Given(/^I navigate to "([^"]*)" website( and log in with "([^"]*)")?$/, { wrapperOptions: { retry: 2 } }, async (website, user) => {
  await BasePage.open('/')
  if (website === 'SauceDemo') {
    try {
      await helperFunctions.logIn(user)
    } catch (err) {
      console.log('Error in first login. Retrying...')
      await browser.refresh()
      await browser.pause(2000)
      await helperFunctions.logIn(user)
    }
  } else {
    context.set({ key: 'ceva', val: 'altcva' })
    console.log('AquaBot here', context)
  }
})

Given(/^I click on "([^"]*)" button$/, async buttonName => {
  let btnName = buttonName.toLowerCase()
  const buttonSelector = await $(`#${btnName}`)
  await browser.execute(elem => {
    elem.scrollIntoViewIfNeeded()
  }, buttonSelector)
  await browser.$(buttonSelector).waitForDisplayed({ timeout: 5000, reverse: false, timeoutMsg: `Button still not displayed` })
  await browser.$(buttonSelector).click()
})

Given(/^I chose "([^"]*)" radio button$/, async buttonName => {
  console.log('radio', buttonName)

  const radioButtons = btnName => $(`#contactForm .form-group .radio-container input[id=c${btnName}]`)
  const labelButtons = await browser.$$('#contactForm .form-group .radio-container')

  await browser.execute(elem => {
    elem.scrollIntoViewIfNeeded()
  }, labelButtons[1])

  for (let i = 0; i < labelButtons.length; i++) {
    const labelBtn = await labelButtons[i].getText()
    if (labelBtn === buttonName) {
      await radioButtons('phone-mobile').click()
    }
  }
})
Given(/^I chose all option that starts with t from dropdown$/, async () => {
  const ddl = await $('#contactForm .form-group .form-control-select')
  const options = await $$(`#contactForm .form-group .form-control-select option`)
  await browser.execute(elem => {
    elem.scrollIntoViewIfNeeded()
  }, ddl)

  await browser.$(ddl).waitForDisplayed({ timeout: 5000 })
  await browser.$(ddl).click()

  // let arr = []
  // for (let option of options) {
  //   const optionText = await option.getText()
  //   if (optionText.toLowerCase().startsWith('t')) arr.push(optionText)
  // }
  // console.log(arr)
  await ddl.selectByAttribute('value', 'Testing')
  await ddl.selectByVisibleText('Tables')
})

Given(/^I chose all option that starts with t from dropdown$/, async () => {
  const ddl = await $('#contactForm .form-group .form-control-select')
  const options = await $$(`#contactForm .form-group .form-control-select option`)
  await browser.execute(elem => {
    elem.scrollIntoViewIfNeeded()
  }, ddl)

  await browser.$(ddl).waitForDisplayed({ timeout: 5000 })
  await browser.$(ddl).click()

  // let arr = []
  // for (let option of options) {
  //   const optionText = await option.getText()
  //   if (optionText.toLowerCase().startsWith('t')) arr.push(optionText)
  // }
  // console.log(arr)
  const testing = await ddl.selectByAttribute('value', 'Testing')
  const table = await ddl.selectByVisibleText('Tables')
})
