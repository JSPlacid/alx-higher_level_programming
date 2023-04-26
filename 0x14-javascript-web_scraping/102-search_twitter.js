#!/usr/bin/node

const request = require('request');

async function get (url, options) {
  return new Promise(function (resolve, reject) {
    request.get(url, options, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function post (url, options) {
  return new Promise(function (resolve, reject) {
    request.post(url, options, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function bearerToken () {
  const consumerKey = process.argv[2];
  const consumerSecretKey = process.argv[3];
  const consumerKeys = `${consumerKey}:${consumerSecretKey}`;
  const encodedConsumerKeys = Buffer.from(consumerKeys).toString('base64');
  const bearerTokenUrl = 'https://api.twitter.com/oauth2/token';
  const requestConfig = {
    url: bearerTokenUrl,
    Authorization: `Basic ${encodedConsumerKeys}`,
    auth: {
      user: consumerKey,
      pass: consumerSecretKey
    },
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    form: {
      grant_type: 'client_credentials'
    }
  };

  const response = await post(requestConfig);

