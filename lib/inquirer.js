const inquirer = require('inquirer');


module.exports = {
  askGithubCredentials: async () => {
    const questions = [
      {
        name: 'secret',
        type: 'input',
        message: 'Enter your secret hash:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a secret hash.';
          }
        }
      },
      {
        name: 'validityInSec',
        type: 'input',
        message: 'Validity time in sec:',
        validate: function(value) {
          const numb = parseInt(value)
          if (!isNaN(numb)) {
            return true;
          } else {
            return 'Please enter validity time in sec.';
          }
        }
      },
      {
        name: 'name',
        type: 'input',
        message: 'Enter a user name(Optional):',
        validate: function( value ) {
          return true;
        }
      }
    ];

    return inquirer.prompt(questions);
  }
};
