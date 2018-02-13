const path = require("path");
/* eslint import/no-extraneous-dependencies:"off" */
const ghpages = require('gh-pages');

ghpages.publish(path.join(__dirname, 'public'), {
    repo: `https://${process.env.GH_Key}@github.com/user/private-repo.git`,
    branch: 'master',
    silent: true
});