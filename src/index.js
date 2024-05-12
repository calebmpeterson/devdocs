const { Webview } = require("webview-nodejs");
const minimist = require("minimist");

const argv = minimist(process.argv.slice(2));
const domain = argv.domain ? `${argv.domain}/` : "";
const query = encodeURIComponent(argv._.join(" "));

const w = new Webview(true);
w.title("DevDocs");
w.size(1280, 1024);

w.navigate(`https://devdocs.io/${domain}#q=${query}`);

w.show();
