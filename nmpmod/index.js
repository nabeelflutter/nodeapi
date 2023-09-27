const chalk = require('chalk');
const validator = require('validator');
console.log(chalk.yellow('Hello world!'));
const result = validator.isEmail('nabeee@gmail.com');
console.log(result ? chalk.green.underline.inverse(result) : chalk.red.underline.inverse(result));
