class Args {
  getArgs(argVal) {
    const args = process.argv.slice(3)
    let arg
    args.forEach(val => {
      if (val.includes(argVal)) {
        arg = val.split('=')[1]
      }
    })
    return arg
  }
}
export default new Args()
