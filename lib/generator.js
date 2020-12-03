const crypto = require('crypto')

module.exports = async (secret, validityInSec, name = '') => {
  const unixTimeStamp = parseInt(Date.now() / 1000, 10) + parseInt(validityInSec, 10)
  const username = [unixTimeStamp, name].join(':')

  const hmac = crypto.createHmac('sha1', secret)
  hmac.setEncoding('base64')
  hmac.write(username)
  hmac.end()
  const password = hmac.read()

  return {
    username: username,
    password: password
  }
}
