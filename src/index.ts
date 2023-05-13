import * as core from '@actions/core';
// import * as github from '@actions/github';
import axios from 'axios';

function sendHttpPost(url: string, data: any) {
  const axiosInstance = axios.create();
  const requestUrl = url;
  const jsonData = data;
  axiosInstance
    .post(requestUrl, jsonData)
    .then(() => {
      console.log('Sent.');
      // console.log(response);
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
  // console.log(`webhook: ${webhook}!`);
  // console.log(`message: ${message}!`);
  // const time = (new Date()).toTimeString();
  // core.setOutput('time', time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error: any) {
  core.setFailed(error.message);
}