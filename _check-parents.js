const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

function stackAt(index) {
  const slice = html.slice(0, index);
  const stack = [];
  const re = /<!--[\s\S]*?-->|<\/?([a-zA-Z][\w:-]*)(\s[^>]*)?>/g;
  let m;
  const voidEls = new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr","use","path","circle","rect","svg","symbol","stop"]);
  while ((m = re.exec(slice))) {
    if (m[0].startsWith("<!--")) continue;
    const name = m[1].toLowerCase();
    if (voidEls.has(name)) continue;
    if (m[0].startsWith("</")) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === name) {
          stack.splice(i);
          break;
        }
      }
    } else if (!m[0].endsWith("/>")) {
      stack.push(name);
    }
  }
  return stack;
}

const ids = ["sidebar", "entrevistasPage", "gestorPage", "dashboardPage", "sidebarOverlay"];
for (const id of ids) {
  const i = html.indexOf(`id="${id}"`);
  if (i < 0) {
    console.log(id, "NOT FOUND");
    continue;
  }
  console.log("\n#" + id);
  console.log(stackAt(i).join(" > "));
}

const bodyOpen = html.indexOf('class="app-shell-body"');
const bodyCloseGuess = html.indexOf("</div>", html.indexOf('id="sidebarOverlay"'));
console.log("\n--- around overlay ---");
console.log(html.slice(html.indexOf('id="sidebarOverlay"') - 80, html.indexOf('id="sidebarOverlay"') + 120));
