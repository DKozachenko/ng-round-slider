# ng-round-slider

A monorepository with:

* [ng-round-slider](./libs/ng-round-slider/README.md) - Angular library with implementation of [Round Slider JQuery Plugin](https://roundsliderui.com) using [JQuery](https://www.npmjs.com/package/jquery) and [round-slider](https://www.npmjs.com/package/round-slider) packages
* [ng-round-slider-demo](./apps/ng-round-slider-demo/README.md) - demo application for `ng-round-slider` library which represents a lot of examples 

## Storybook

#### Serving

* `ng-round-slider`: 
```bash
npm i
npm run slider:storybook
```

Storybook will open at `http://localhost:4400`.

#### Building

* `ng-round-slider`: 
```bash
npm i
npm run slider:build-storybook
```

Bundle will be in `dist/storybook/ng-round-slider` folder.

#### With Docker

* `ng-round-slider`: 
```bash
docker build . -t slider-storybook-image  -f libs/ng-round-slider/Dockerfile.storybook
docker run -d -p 4400:80 slider-storybook-image:latest
```

Storybook can be opened at `http://localhost:4400`.

## Build in production mode

* `ng-round-slider`: 
```bash
npm i
npm run slider:build
```
Bundle will be in `dist/libs/ng-round-slider` folder.

* `ng-round-slider-demo`: 
```bash
npm i
npm run demo:build
```
Bundle will be in `dist/apps/ng-round-slider-demo` folder.

## Demo

#### Serving

* `ng-round-slider-demo`: 
```bash
npm i
npm run demo:serve
```

#### With Docker

* `ng-round-slider-demo`: 
```bash
docker build . -t slider-demo-image  -f apps/ng-round-slider-demo/Dockerfile.demo
docker run -d -p 4200:80 slider-demo-image:latest
```

Demo can be opened at `http://localhost:4200`.

## Publish

Update version in `libs/ng-round-slider/package.json`.

* `ng-round-slider`: 
```bash
npm i
npm run slider:build
npm run slider:publish
```

## Lint

* `ng-round-slider`: 
```bash
npm i
npm run slider:lint
```

* `ng-round-slider-demo`: 
```bash
npm i
npm run demo:lint
```

## Contributing

If you have any suggestions, ideas, or problems, feel free to create an issue or PR.
