webpack sample project
Sample webpack project with ES6 and Sass. Also includes Sass linting setup with stylelint and stylelint-selector-bem-pattern, to enforce BEM patterns for selectors.

This is a basic setup that only includes two main app files for demo purposes: ./src/main.js and ./src/main.scss. You get the idea.

There's nothing in this setup that hasn't been done earlier by other people (see credits section for more advanced configuration). This project might be useful when quick (local) development setup is needed, to play with new stuff.

For sample jspm and SystemJS project setup, you might want to take a look at https://github.com/akikoo/systemjs-jspm-sass-setup. There's also a sample Universal React setup (both in the browser and in node) with jspm and SystemJS: https://github.com/akikoo/universal-react-systemjs-jspm.

Environment setup
  $ npm install
Development
Start the Webpack server (includes live reloading when you change files):

  $ npm start
Open http://localhost:6001 in a browser. ./src/main.js is the entry point.

Sass linting
Stylelint is used to enforce consistent conventions and avoid errors in stylesheets. .stylelintrc configuration file contains all the available rules for completeness, with the ones that I don't currently need turned off (set to null). I've edited the options of each rule to my liking, based mostly on stylelint example config and stylelint-config-standard. For more info, see stylelint rules documentation.

Bundling
  $ npm run bundle
Credits
https://github.com/rauschma/webpack-es6-demo
https://github.com/srn/react-webpack-boilerplate
https://css-tricks.com/stylelint/
...and probably many others too