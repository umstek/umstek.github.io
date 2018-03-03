const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, "public/CNAME"), "www.umstek.tk", () => {});
