# AngularDemo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
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

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 🏛️ Architecture & Folder Structure

The application adopts a Domain-Driven Modular Library Architecture located under src/libs/. Each domain feature operates as an encapsulated, loosely coupled module exposing a public API barrel (index.ts). This enforces strict boundary controls and prevents circular dependencies between domain verticals.
src/
├── app/
│ ├── app.config.ts # Application-level providers (routes, HTTP, PrimeNG config)
│ ├── app.html # Root template (shell, accessible header, router-outlet)
│ ├── app.routes.ts # Lazy-loaded feature routes
│ └── app.ts # Root App component
├── libs/
│ ├── contact/ # Contact Domain Feature
│ │ ├── services/ # Inquiries & submission API handlers
│ │ ├── store/ # Contact feature SignalStore
│ │ ├── ui/ # Dumb/presentational form and card components
│ │ ├── contact.component.html
│ │ ├── contact.component.ts # Smart routed feature container
│ │ └── index.ts # Public API barrel export
│ ├── scout/ # NASA Scout / Asteroid Monitoring Domain
│ │ ├── contants/ # Threshold constants & mathematical weights
│ │ ├── services/ # NASA Scout HTTP client integrations
│ │ ├── store/ # NgRx SignalStore (data, apiState, selections)
│ │ ├── types/ # Strict TypeScript interfaces & API models
│ │ ├── utils/ # Risk Index & asteroid sizing algorithms
│ │ ├── index.ts # Public API barrel export
│ │ ├── scout.component.html
│ │ └── scout.component.ts # Smart feature dashboard container
│ └── shared/ # Cross-Cutting Core
│ ├── ui/ # Reusable UI widgets, badges, navigation landmarks
│ └── utils/ # Formatters, date parsers, math helpers
├── index.html # Root HTML document
├── main.ts # Application bootstrap
└── styles.css # Global design tokens, Tailwind base, and PrimeNG layer
