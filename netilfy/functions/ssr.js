const serverless = require('serverless-http');
const { app } = require('../../dist/premium-node16/server/main.js');
module.exports.handler = serverless(app());