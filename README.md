# eslint-config

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) used @[OKP4](https://github.com/okp4)

[![Lint](https://github.com/okp4/eslint-config-okp4/actions/workflows/lint.yml/badge.svg)](https://github.com/okp4/eslint-config-okp4/actions/workflows/lint.yml)
[![Build](https://github.com/okp4/eslint-config-okp4/actions/workflows/build.yml/badge.svg)](https://github.com/okp4/eslint-config-okp4/actions/workflows/build.yml)
[![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

## Purpose & Philosophy

This repository holds the shared [ESLint](https://eslint.org) configuration used for all our [TypeScript](https://www.typescriptlang.org) projects at [OKP4](https://github.com/okp4).

The current configuration enforces strict dogmatic rules - (too strict you might think)- in addition to those recommended by the various linting extensions available such as ESLint itself, and various plugins such as `react`, `react-hooks`, `typescript-eslint`...

Indeed, at [OKP4](https://github.com/okp4) we are convinced that the quality of the code depends on clear and consistent coding conventions, with an automated enforcement.

The rules configured are mainly based on two pillars:

- [React](https://reactjs.org): We encourage as much as possible an architectural approach focusing on Functional Components. That's why we enforce a strict mode and a High Severity according to the recommendations of Facebook Core ([React Team](https://reactjs.org/community/team.html)).
- [TypeScript](https://www.typescriptlang.org): At [OKP4](https://github.com/okp4), we love Type Safety, and we are deeply conviced that better type safety means less error in production. That's one of the reasons we chose `TypeScript` over `JavaScript`. We've therefore adopted very strict Type Checking rules in order to take advantage of the best of `TypeScript`.

## Installation

### NPM

`npm` version must be at least equal to 7.0.0 to install automatically peer-dependencies (see <https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/>)

```sh
npm i @okp4/eslint-config
```

### Yarn

If you want to use `yarn`, you must first list all peer dependencies using `npm` and add then individually with `yarn`.

First, list the peer dependencies and versions:

```sh
npm info @okp4/eslint-config@latest peerDependencies
```

Then run the following command line for each listed peer dependency.

```sh
yarn add --dev <dependency>@<version>
```

## Usage

### ESLint

Create your `.eslintrc` configuration file, taking care to properly inform the source of the project used for the TypeScript parser:

```json
{
  "extends": "@okp4", // may be combined with other shareable configurations
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### Prettier

Cretate your `.prettierrc.js` configuration file :

```javascript
module.exports = {
  ...require('@okp4/eslint-config/.prettierrc.js')
}
```

## Contributing

So you want to contribute? Great. We appreciate any help you're willing to give. Don't hesitate to open issues and/or submit pull requests.

Remember that this is the configuration we use at [OKP4](https://github.com/okp4), and that we apply everywhere in our private and public projects. This is why we may have to refuse change requests simply because they do not comply with our internal requirements, and not because they are not relevant.
