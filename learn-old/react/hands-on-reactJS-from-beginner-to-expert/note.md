- Declarative vs Imperative ?
- DOM (Document Object Model) ?

## INDEX

00. Introduction to React.js        -> Understand React's basics
01. ReactDOM and JSX                -> Render components and write JSX
02. How to use IDE for React        -> Set up a React development environment
03. Functional Components           -> Create and use functional components
04. Class Components                -> Create and use class components
05. Hooks Update                    -> Manage state and side effects in components
06. JSX                             -> 
07. Props                           ->
08. State                           -> 
09. setState                        -> 
10. Destructing Props and State     -> Pass data and manageg component state
11. Event Handling                  -> Handle user interactions
12. Binding Event Handlers          -> 
13. Methods as Props                ->
14. Conditional Rendering           ->
15. List Rendering                  ->
16. Lists and keys					-> 
17. Index as Key Anti-pattern		-> Render content and lists dynamically
18. Styling ans CSS Basics			-> Apply styles to components
19. Basics of form Handling			->
20. Component Lifecycle method		-> Handle forms and understand component lifecycle

## 00 Introduction to React.js

- React.js is JavaScript Frontend library
- Developed by Facebook
- Used for SPA (Single Page Application)
- Uses Declarative Approach

### Key Features

1. Component-Based Architecture
    - Reusability
    - Maintainability

2. Performance Efficiency
    - Virtual DOM
    - Optimized Rendering

3. Declarative Programming
    - Simplified UI Logic
    - Predictable state management

4. Strong Ecosystem and Community Support
    - Extensive Library and tooling support
    - Active Community

5. Flexibility
    - Interoperability
    - Cross-Platform Developement

6. Developer Experience
    - JSX
    - Developer tools
    - Rich Documentation

## 01 ReactDOM and JSX 

### ReactDOM

- A package provided by react that allows developers to manage and manipulate the DOM (Document Object Model) in web application.
- Provides methods that can be used to render components, update components and handle events

#### Rendering

- The primary method provided by reactdom.render()
- Takes React component and a dom element, then render the component inside that element
- From React 18, rendering method is reactdom.createroot(), which allow for the use of react's new concurrent rendering features

#### Hydration

- reactdom also provides hydrate()
- used in server-side rendering (SSR) scenarios
- allows react component to attach to existing server rendering html

### JSX (JavaScript XML)

- allows developer to write HTML-like code directly within JavaScript
- JSX looks similar to html with embedded js with {}
- need to be transformed into regular JavaScript by compiler like babel
- JSX transformed into react.createElement() calls
- Used to define the UI for react components
- in Functional JSX is returned and in Class JSX defined in render() method
