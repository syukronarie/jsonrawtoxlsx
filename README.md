---
displayName: jsonrawtoxlsx
description: convert json raw to xlsx
labels: ['json', 'xlsx', 'jsontoxls', 'middleware', 'convert json to xlsx']
---

# jsonrawtoxlsx

[![codecov.io](https://codecov.io/github/syukronarie/jsonrawtoxlsx/coverage.svg?branch=main)]
(https://codecov.io/github/syukronarie/jsonrawtoxlsx/?branch=main)

## What is jsonrawtoxlsx?

jsonrawtoxlsx is library to convert json raw (`array` or `object`) into xlsx file.

## Installation

using npm

```zsh
npm install jsonrawtoxlsx
```

using yarn

```zsh
yarn add jsonrawtoxlsx
```

using pnpm

```zsh
pnpm add jsonrawtoxlsx
```

## Usage

Use to save as file:

```js
const jsonrawtoxlsx = require('jsonrawtoxlsx');
const json = {
  name: 'John',
  age: 27,
  job: 'Software Engineer',
};

const xlsx = jsonrawtoxlsx(json);

fs.writeFileSync('example.xlsx', xlsx, 'binary');
```

Or use as express middleware. It adds a convenience `xlsx` method to the response object to immediately output an excel as download.

```js
const express = require('express');
const jsonrawtoxlsx = require('jsonrawtoxlsx');
const app = express();
const PORT = 3000;

const data = [
  {
    name: 'John',
    age: 27,
    job: 'Software Engineer',
  },
  {
    name: 'John',
    age: 27,
    job: 'Software Engineer',
  },
];

app.use(jsonrawtoxlsx.middleware);
app.get('/', function (req, res) {
  res.xlsx('example.xlsx', data);
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
```

## Contributing

Anyone can contribute with [issues](https://github.com/syukronarie/jsonrawtoxlsx/issues) and [PRs](https://github.com/syukronarie/jsonrawtoxlsx/pulls). If you're submitting a pull request, always create a new branch to work your changes, and try squashing commits down if possible. Always test any new code and make sure `npm test` passes and `npm run test:cover` for code coverage is adequate before opening a PR.

happy coding!
