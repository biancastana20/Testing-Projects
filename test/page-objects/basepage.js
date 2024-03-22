class BasePage {
  open(path) {
    return browser.url(`${path}`)
  }
}
export default new BasePage()
