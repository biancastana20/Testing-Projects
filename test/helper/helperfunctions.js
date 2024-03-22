const helperFunctions = {
  logIn: async user => {
    await $(`#user-name`).setValue(process.env[`${user.toUpperCase()}_EMAIL`])
    await $(`#password`).setValue(process.env.USER1_PASSWORD)
    await $(`#login-button`).click()
  },
}
export default helperFunctions
