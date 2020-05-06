var querystring = require('querystring');
var req = require('request');
var form = {
    id: '1',
    // msg: 'test',
};

var formData = querystring.stringify(form);
var contentLength = formData.length;

req({

    headers: {
      'Content-Length': contentLength,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'http://dummy.restapiexample.com/api/v1/employee/5',
    body: formData,
    method: 'GET'

  }, function (err, res, body) {
        console.log('res is',res);
        console.log('err',err);
  });