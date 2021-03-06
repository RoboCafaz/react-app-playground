# Bobby's Cool App

This web app serves up a React app with some cool
CSS that shows a spinning picture of my cat and
lets you see what other noises my other cats make!

## Building the App

Run `yarn build`. This will use webpack to bundle the
website and code into a deployable web package.

We leverage `babel` to transpile our Typescript code
to something consumable by a web browser.

We leverage `file-loader` to replace references to
static assets in code with what will ultimately be
their static file paths when the site is bundled.

We leverage `favicons-webpack-plugin` to serve up the
favicons for the page.

We leverage `html-webpack-plugin` to serve up an HTML
page that will run our React app.

## Running the App

Run `yarn start`. This will use webpack-dev-server to
serve up the website.

## Testing the App

Run `yarn test`. This will run all the unit tests in
the suite.

We leverage `babel-jest` to transpile the tests and
their associated modules.

## Linting the App

Run `yarn lint` to check the code base for style
violations and other problems. You can also run
`yarn lint --fix` to auto-repair any simple errors.
