import * as core from '@actions/core';
import axios from 'axios';

function sendHttpPost(url: string, data: any) {
  const axiosInstance = axios.create();
  const requestUrl = url;
  const jsonData = data;
  axiosInstance
    .post(requestUrl, jsonData)
    .then(() => {
      console.log('Sent.');
    })
    .catch((error) => {
      console.log('The request failed.');
      console.log(error);
    });
}

try {
  const webhook = core.getInput('webhook');
  const content = core.getInput('message');
  const data = { content };
  sendHttpPost(webhook, data);
} catch (error: any) {
  core.setFailed(error.message);
}