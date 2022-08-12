# Show Decider

Show decider is a static website that decides what epdisode to watch given a show.

## Installation

Run this project in its own virtual environment. Look into venv or pyenv.
**Make sure you are in the root directory of application.**

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
npm run build
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
* Look in the `cdk` folder for creating an s3 bucket, deploying the lambda function, and setting up for hosting via CDK.
* I may use the data in TestData.txt, I'm not sure yet.

## [epguides-api](https://rapidapi.com/frecar/api/epguides-api/)
* api endpoint I call within my lambda function

## About

Show Decider is an open source library. Host a static website on an Amazon S3 bucket that users can enter a show and an episode to watch is chosen. 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Copyright and License for the [Scrolling Nav](https://startbootstrap.com/template/scrolling-nav/) template I used

Copyright 2013-2022 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE) license.

## License

[MIT](https://choosealicense.com/licenses/mit/)
