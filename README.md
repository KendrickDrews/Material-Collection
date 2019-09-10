# MineralCollection

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Steps for Test

DONE - FIRST (Starting Up); Using the command line, use the angular cli to create an initial application.  
DONE -- No need to do any work to make it do anything yet
DONE -- It’s possible you will need to install or update npm first.
DONE -- The application will be about your ‘mineral collection’ so name it appropriately.

- SECOND; Create basic mineral entry and mineral collection list display components
DONE -- Make sure you have a list of minerals currently in your collection
-- Make sure you have a form element that will add to that list when you’ve entered a new mineral
-- Use angular formbuilder (or manually create formcontrols) for any forms.

(none of the following are necessary but would be impressive)
!! Show us this work you did as a link to a commit on github or gitlab as an alternative to writing it out here
!! Any additional embellishing components beyond the above are welcome but not required

- THIRD; Implement a service  
DONE -- Utilize observables directly rather then converting to promises
DONE -- Inject service into all components that need it.
-- Make sure your components can handle delays/slow responses from this service.

(none of the following are necessary but would be impressive)
!! Show us this work you did as a link to a commit on github or gitlab as an alternative to writing it out here
!! Allow data to be persistent across sessions, using one of the built in browser storage frameworks

- LASTLY; Refactor your application to use our API endpoints to save your mineral collection list to an online database
DONE -- API reference: https://interview.api.numbersusa.com/
DONE -- use https://interview.api.numbersusa.com/generate/ to generate a token (from a browser)
DONE -- embed the token in your app, in any way you choose.
DONE -- Utilize all endpoints shown below (with the exception of /generate)
-- Make sure your code can handle slow responses from the server.
-- Handle error codes appropriately.

(none of the following are necessary but would be impressive)
!! Show us this work you did as a link to a commit on github or gitlab as an alternative to writing it out here
!! Automatically inject Authorization header  via an HttpInterceptor
!! Do some local caching using localstorage or indexedDB
!! implement a function  to use a  theoretical PATCH endpoint
