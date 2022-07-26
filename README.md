# [Start Bootstrap - Scrolling Nav](https://startbootstrap.com/template/scrolling-nav/)

[Scrolling Nav](https://startbootstrap.com/template/scrolling-nav/) is an unstyled one page starter template with a collapsing, smooth scrolling navigation bar for [Bootstrap](https://getbootstrap.com/) created by [Start Bootstrap](https://startbootstrap.com/).

## Preview

[![Scrolling Nav Preview](https://assets.startbootstrap.com/img/screenshots/templates/scrolling-nav.png)](https://startbootstrap.github.io/startbootstrap-scrolling-nav/)

**[View Live Preview](https://startbootstrap.github.io/startbootstrap-scrolling-nav/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StartBootstrap/startbootstrap-scrolling-nav/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-scrolling-nav.svg)](https://www.npmjs.com/package/startbootstrap-scrolling-nav)
[![dependencies Status](https://david-dm.org/StartBootstrap/startbootstrap-scrolling-nav/status.svg)](https://david-dm.org/StartBootstrap/startbootstrap-scrolling-nav)
[![devDependencies Status](https://david-dm.org/StartBootstrap/startbootstrap-scrolling-nav/dev-status.svg)](https://david-dm.org/StartBootstrap/startbootstrap-scrolling-nav?type=dev)

## Download and Installation

To begin using this template, choose one of the following options to get started:

* [Download the latest release on Start Bootstrap](https://startbootstrap.com/template/scrolling-nav/)
* Install via npm: `npm i startbootstrap-scrolling-nav`
* Clone the repo: `git clone https://github.com/StartBootstrap/startbootstrap-scrolling-nav.git`
* [Fork, Clone, or Download on GitHub](https://github.com/StartBootstrap/startbootstrap-scrolling-nav)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with `dist` directory. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

Clone the source files of the theme and navigate into the theme's root directory. Run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `package.json` file to see which scripts are included.

#### npm Scripts

* `npm install` installs all modules and dependencies listed in the package.json file
* `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
* `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
* `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
* `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
* `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
* `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
* `npm run start:debug` runs the project in debug mode
* `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/StartBootstrap/startbootstrap-scrolling-nav/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](https://startbootstrap.com/template/scrolling-nav/).

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* <https://startbootstrap.com>
* <https://twitter.com/SBootstrap>

Start Bootstrap was created by and is maintained by **[David Miller](https://davidmiller.io/)**.

* <https://davidmiller.io>
* <https://twitter.com/davidmillerhere>
* <https://github.com/davidtmiller>

Start Bootstrap is based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2022 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE) license.



------------------------------------------------------------------------------------------

# Show Decider

Show decider is an application that decides what epdisode to watch given a show.

## Installation

Run this project in its own virtual environment. Look into venv or pyenv.
**Make sure you are in the root directory of application.**

<!-- You need to install the AWS CDK toolkit

```bash
npm install aws-cdk
``` -->
<!-- 
You also need to pip install software from requirements.txt.

```bash
pip install -r requirements.txt
```

AND also pip install software from requirements.txt to package to be used in lambda

```bash
pip install --target=package -r requirements.txt
``` -->

#### npm Scripts

* `npm install` installs all modules and dependencies listed in the package.json file
* `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
* `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
* `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
* `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
* `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
* `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
* `npm run start:debug` runs the project in debug mode
* `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`
* `npm test` runs jasmine which is the framework used for testing the JavaScript code

You must have npm installed in order to use this build environment.

## Deploying project to aws s3 bucket

- In a terminal run

```bash
aws s3 cp full_path_to/showDecider/dist s3://name_of_bucket/ --recursive
```

## Running tests

- In a terminal run

```bash
npm test
```

## Making UI changes

* Edit the Pug file located in the `src/pug/` folder.

## Notes

* Look at the file stepsForBucketAndCodeDeploy.txt for help on creating an S3 bucket and deploying project to bucket via command line.
* I don't think index.html and error.html in the root directory are needed.
* I may use the data in TestData.txt, I'm not sure yet. 

## [epguides-api](https://rapidapi.com/frecar/api/epguides-api/)

## About

Show Decider is an open source library. Host a static website on an Amazon S3 bucket that users can enter a show and an episode to watch is chosen. 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Copyright and License for the [Scrolling Nav](https://startbootstrap.com/template/scrolling-nav/) template I used

Copyright 2013-2022 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE) license.

## License

[MIT](https://choosealicense.com/licenses/mit/)
