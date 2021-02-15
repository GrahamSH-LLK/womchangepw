var bcrypt = require("bcrypt");
const saltRounds = 10;
const prompts = require('prompts');
 
(async () => {
  const response = await prompts({
    type: 'password',
    name: 'pass',
    message: 'What is your new pw?'
  });
 
  

bcrypt.hash(response.pass, saltRounds, async function (err, hashedPassword) {console.log('Set this as your password in MongoDB: ' + hashedPassword)})
})();
