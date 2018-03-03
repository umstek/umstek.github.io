const path = require("path");
/* eslint import/no-extraneous-dependencies:"off" */
const ghpages = require("gh-pages");

ghpages.publish(path.join(__dirname, "public"), {
  repo: `https://${process.env.GH_Key}@github.com/umstek/umstek.github.io.git`,
  branch: "master",
  silent: true,
  user: {
    name: 'Wickramaranga Abeygunawardhana',
    email: 'umstek@live.com'
  }
});
