const chalk = require('chalk')
const format = require('util').format

/**
 * Prefix
 */

var prefix = '   laravel-cli'
var sep = chalk.gray('·')

exports.log = () => {
  let msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}

exports.fatal = message => {
  if (message instanceof Error) message = message.message.trim()
  let msg = format.apply(format, arguments)
  console.error(chalk.red(prefix), sep, msg)
  process.exit(1)
}

exports.success = () => {
  let msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}