# `mean-stack-boilerplate` —

This project is an application skeleton for a typical [MEAN](http://mean.io/) stack.
To start this project I cloned [angular-seed](https://github.com/angular/angular-seed) and started from it.

I changed some things in order to make what I want to use for my projects:
* add [ui-router](https://ui-router.github.io/) for routing at client-side;
* setup sass;
* add basic gulp tasks to inject bower components, js and css files and to watch sass files to automatically compile to css;
* add a simple express server;
* setup mongoDB;
* setup development, staging and production environments

## TODO - coming soon
* add a simple express server;
* setup mongoDB;
* setup development, staging and production environments

## Getting Started

To get you started you can simply clone the `mean-stack-boilerplate` repository and install the dependencies:

### Clone `mean-stack-boilerplate`

Clone the `mean-stack-boilerplate` repository using git:

HTTP
```
git clone https://github.com/tiagofscoelho/mean-stack-boilerplate.git
cd mean-stack-boilerplate
```

### Install Dependencies

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```
Now browse to the app at [`localhost:8000`](localhost:8000).


## Directory Layout

```
app/                    --> all of the source files for the application
  assets/               --> all assets as sprites, images, sounds, etc goes here
  components/           --> all app specific modules
    home/                 --> example of one component
      _home.scss            --> sass file for home components
      homeController.js     --> home controller
      homeService.js        --> home service
      homeView.html         --> home template
    app.js                --> main application module
    app.scss              --> main sass file
  styles
    app.css               --> main css file generated gulp from sass files
  index.html            --> app layout file (the main html template file of the app)
gulpfile.js           --> gulp tasks for automate tasks
index.html            --> index file that gulp tasks use to create the main html file
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
```


## Testing

I did not change anything at this section so I will keep the original text from [angular-seed](https://github.com/angular/angular-seed),
just changing the repository name. I removed the files with because I don't want them in this boilerplate.
If you wanna see those examples check [angular-seed](https://github.com/angular/angular-seed) repository;

There are two kinds of tests in the `mean-stack-boilerplate` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `mean-stack-boilerplate` app comes preconfigured with unit tests. These are written in [Jasmine](https://jasmine.github.io/),
which we run with the [Karma](https://karma-runner.github.io/1.0/index.html) test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:


### Running End-to-End Tests

The `mean-stack-boilerplate` app comes with end-to-end tests, again written in [Jasmine](https://jasmine.github.io/). These tests
are run with the [Protractor](http://www.protractortest.org/#/) End-to-End test runner. It uses native events and has
special features for Angular applications.

* The configuration is found at `e2e-tests/protractor-conf.js`.

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor can
interact with it.

**Before starting Protractor, open a separate terminal window and run:**

```
npm start
```

In addition, since Protractor is built upon WebDriver, we need to ensure that it is installed and
up-to-date. The `mean-stack-boilerplate` project is configured to do this automatically before running the
end-to-end tests, so you don't need to worry about it. If you want to manually update the WebDriver,
you can run:

```
npm run update-webdriver
```

Once you have ensured that the development web server hosting our application is up and running, you
can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server](http://www.seleniumhq.org/download/), which in turn requires
the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html) to be installed on your local machine. Check this by running
`java -version` from the command line.

If JDK is not already installed, you can download it [here](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html).

### Running the App during Development

Start by running mongoDB on your machine. If mongoDB is not installed, just go ahead and download it [here](https://www.mongodb.com/download-center?jmp=nav#community).

To run mongoDB you can use. Note that the command don't have the last B from mongoDB. It may be necessary to run this as administrator.

```
mongod
```

After run mongoDB you can open a new terminal window and type:

```
npm run dev
```

### Running the App in Production
Coming soon


## Contact
If you have any question just send an email to tiagofscoelho@gmail.com or just send a Pull Request if you want to improve this repo. :smile:
