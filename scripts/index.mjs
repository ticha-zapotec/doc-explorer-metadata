// super simple script to create index.html file in json foler with links to all json files
import fs from 'fs';
import path from 'path';

const jsonDir = path.join(process.cwd(), 'json');
const indexPath = path.join(jsonDir, 'index.html');
const files = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'));
const links = files.map(file => `<li><a href="${file}">${file}</a></li>`).join('\n');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JSON Files Index</title>
  </head> 
  <body>
      <h1>Index of JSON Files</h1>
      <ul>
          ${links}
      </ul>
  </body>
</html>
`;

fs.writeFileSync(indexPath, htmlContent);
console.log(`Index file created at ${indexPath}`);  