const axios = require('axios');
const request = require("request");

const url = 'https://server-sound-api.herokuapp.com';
async function convertAudio(apiKey, formData) {
    let result = {};
  //  const response = await axios({
  //       method: 'post',
  //       url: 'http://abcvoicene.herokuapp.com/abcvoiceapi/checkApiKey',
  //       data: {
  //           apiKey: apiKey
  //       }
  //     });
  //   if (response.data === 'Api Key Invalid') {
  //       return 'Api Key Invalid';
  //   }
  console.log('formData-----', formData);
  result = await axios({  method: 'post', url: url, formData: formData });
      return result.data;
  }
  module.exports = convertAudio;
