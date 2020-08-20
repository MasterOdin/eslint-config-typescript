#!/usr/bin/env node

'use strict';

const fs = require('fs');
const { join } = require('path');

if (!process.env.INIT_CWD) {
  return;
}

const config = {
  extends: './tsconfig.json',
  include: [
    'src/**/*',
    'test/**/*.spec.ts',
  ],
  exclude: ['node_modules'],
};

const filePath = join(process.env.INIT_CWD, 'tsconfig.eslint.json');
if (!fs.existsSync(filePath)) {
  console.log(`Generating  ${filePath}`);
  fs.writeFileSync(filePath, `${JSON.stringify(config, null, 2)}\n`);
}
