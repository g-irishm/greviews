# File Structure

This documentation walks through the file structure of the web-app application. The basics are by Angular which you can find at https://angular.io/docs.

## Directory structure

```
    src | -
        | - app
            | - components
            |     | - global
            |     |     | - [component]
            |     |     |     - [component].component.html
            |     |     |     - [component].component.ts
            |     |     |     - [component].component.scss
            |     |     |     - [component].component.spec.ts
            |     | - [module]
            |     |     | - [component]
            |     |     |     - [component].component.html
            |     |     |     - [component].component.ts
            |     |     |     - [component].component.scss
            |     |     |     - [component].component.spec.ts
            | - guards
            |     | - [guard]
            |     |     | - [guard].guard.ts
            |     |     | - [guard].guard.spec.ts
            | - modules
            |     | - [module]
            |     |     - [module].module.ts
            |     |     - [module]-routing.module.ts
            |     |     - [module].page.html
            |     |     - [module].page.ts
            |     |     - [module].page.scss
            |     |     - [module].page.spec.ts
            | - services
            |     | - [service]
            |     |     - [service].service.ts
            |     |     - [service].service.spec.ts
```

### src

This is the main folder for the web app. It fowllows Angular directory structure

### app

This is the directory containing the web app code

### components

- This is the directory containing Angular components. You can find the component development guide on Angular. The directory contains 2 sub directories - `global` & specific module directory.

- The specific module directory name is the same name as in the `modules` directory. It stores modules specific components which are lazy loaded only when that specific module is loaded.

### guards

This contains the Angular guards which you can find on angular website. The directory contains a sub directory with the guard name which holds the guard files of that particular guard.

### modules

A module is same as an Angular module which you can find documentation on Angular website.
- The modules directory is what contains the global modules which are served at a particular end point, for example - www.greviews.com/login.
- The module name does not necessarily be the same as the end point name.
- The components that this module uses are to be generated in the `components` directory under the same module sub-directory and included in the `[module]-routing.module.ts` file
- The default file format as per angular is `.module.html`, `.module.ts`, etc. But we follow the file pattern as - `.page.html`, `.page.ts`, etc, as these are main pages for every individual page type that is displayed on the storefront.

### services
The services documentation is the same as Angular service.

- The directory as a sub-directory of the specific `service` which holds the service files.
