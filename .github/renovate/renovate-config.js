'use strict';

const branchName = 'github-renovate';

const fs = require('fs');
const FOLDER = process.env.RENOVATE_CONFIG_FOLDER

if (!fs.existsSync(`${FOLDER}/repositories.json`)) {
  const err = `missing "${FOLDER}/repositories.json" file`
  console.log(`error: ${err}`)
  throw Error(err)
}

module.exports = {
  extends: [
    'config:base',
    "github>renovatebot/.github",
    ":disableRateLimiting"
  ],
  logLevel: process.env.LOG_LEVEL,
  branchPrefix: `${branchName}/`,
  dependencyDashboardTitle: 'Dependency Dashboard self-hosted',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: true,
  onboardingBranch: `${branchName}/configure`,
  platform: 'github',
  dryRun: false,
  username: process.env.USER_NAME,
  repositories: [
    'ivankatliarchuk/.github',
  ],
};
