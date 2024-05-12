const { Webview } = require("webview-nodejs");
const minimist = require("minimist");

const argv = minimist(process.argv.slice(2));

if (argv.help) {
  console.log("Usage:");
  console.log("");
  console.log("  devdocs <query>");
  console.log("  devdocs --api <node|css|html|http> <query>");
  console.log("");
  process.exit(0);
}

const api = argv.api ? `${argv.api}/` : "";
const query = encodeURIComponent(argv._.join(" "));

const w = new Webview(true);
w.title("DevDocs");
w.size(1280, 1024);

w.navigate(`https://devdocs.io/${api}#q=${query}`);

w.show();
