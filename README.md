# AngularDemo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## trade-offs to note

- AG Grid filters and sorts on the client. switch to the server side model for large datasets. this needs filter,sort api end points from backend
- chose a folder-based monorepo layout over full Nx to avoid over engineering.
- The risk formula kept is not valid one.
