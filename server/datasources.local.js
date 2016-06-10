var MONGODB_URL = process.env.MONGODB_URL || null;

var datasources = {};

if (MONGODB_URL) {
  datasources.db = {
    name: 'db',
    connector: 'loopback-connector-mongodb',
    url: MONGODB_URL
  };
}

datasources.twilio = {
  name: 'twilio',
  connector: 'loopback-connector-twilio',
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN
};

console.log(process.env.TWILIO_ACCOUNT_SID)

module.exports = datasources;
