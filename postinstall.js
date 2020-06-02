#!/usr/bin/env node

const fs = require('fs');
const { join } = require('path');



if (!process.env.INIT_CWD) {
  return;
}

const filePath = join(process.env.INIT_CWD, 'tsconfig.eslint.json');
if (!fs.existsSync(filePath)) {
  console.log(`Generating  ${filePath}`);
  fs.writeFileSync(filePath, JSON.stringify({
    extends: "./tsconfig.json",
    include: [
      "src/**/*",
      "test/**/*.spec.ts",
    ],
    exclude: [
      "node_modules",
    ],
  }, null, 2) + "\n");
}
