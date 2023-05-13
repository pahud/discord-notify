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

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const githubBuild = project.addTask('github:build', {
  description: 'Prebuild setup for Gitpod',
});
githubBuild.exec('npx ncc build lib/index.js --license licenses.txt');

project.gitignore.include('dist');

project.synth();