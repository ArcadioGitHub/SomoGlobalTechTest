# Somo Tech Test

This repo uses JavaScript Mocha and Assert to test.

## Environment Setup

### NodeJS

Install **NodeJS** from https://nodejs.org/
This repo was only tested with Node version 10.13.0. The NVM tool can be used install a specific Node version

### Install NVM (optional):

#### Linux, OSX & (maybe Windows with WSL)
https://github.com/nvm-sh/nvm

#### Windows
https://github.com/coreybutler/nvm-windows

#### Install and use the correct version

```
nvm install 10.13.0
nvm use 10.13.0
```

### Install dependencies

```
npm install
```

### Install npx

```
npm install npx
```

## Run the tests

### Run all the tests

```
npx mocha
```

### Run a single test or suite

Given:

```
describe('describe description', () => {
  it('test description', async () => {
    // ...
  });
```

Run a single suite:

```
npx mocha --grep "describe description"
```

npx Run a single test:

```
npx mocha --grep "test description"
```

## Screenshots 

```
there is a folder called screenshot where you can find some screenshots related to 
several checkpoints I made on the tests.
```





