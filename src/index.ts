import * as core from '@actions/core';
// import * as github from '@actions/github';

try {
  // `who-to-greet` input defined in action metadata file
  const webhook = core.getInput('webhook');
  const message = core.getInput('message');
  console.log(`webhook: ${webhook}!`);
  console.log(`message: ${message}!`);
  // const time = (new Date()).toTimeString();
  // core.setOutput('time', time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error: any) {
  core.setFailed(error.message);
}