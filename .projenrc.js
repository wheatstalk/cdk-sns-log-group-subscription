const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@wheatstalk/cdk-sns-log-group-subscription',
  description: 'An AWS CDK Construct that subscribes a CloudWatch LogGroup to an SNS Topic',
  repositoryUrl: 'https://github.com/wheatstalk/cdk-sns-log-group-subscription.git',

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['misterjoshua'],
  },

  lambdaAutoDiscover: false,

  devDeps: [
    'aws-sdk',
    '@types/aws-lambda',
  ],
});

const runtime = awscdk.LambdaRuntime.NODEJS_14_X;
javascript.Bundler.of(project).addBundle('src/log.lambda.ts', {
  platform: runtime.esbuildPlatform,
  target: runtime.esbuildTarget,
  externals: ['aws-sdk'],
});
javascript.Eslint.of(project).allowDevDeps('src/log.lambda.ts');

project.synth();