import { typescript } from 'projen';
const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: 'main',
  name: 'discord-notify',
  projenrcTs: true,
  deps: [
    '@actions/core',
    '@actions/github',
    'axios',
  ],
  devDeps: ['@vercel/ncc'],
});

const githubBuild = project.addTask('github:build', {
  description: 'build up with ncc into dist',
});
githubBuild.exec('npx ncc build lib/index.js --license licenses.txt');

project.gitignore.include('dist');

project.synth();