# React Tutorial Full Course - Beginner to Pro (React 19, 2025) by SuperSimpleDev

- Projects to built - chatbot, ecommerce
- link to [github](https://github.com/SuperSimpleDev/react-course/)

## What we'll learn

- Set up react with JavaScript
- JSX, Components, Props
- State, Hooks
- Proper React Setup
- Routing
- Automated Testing
- React with a Backend
- Deploy React with AWS
- React with TypeScript
- React with AI

## 1. React Basics, JSX

### Required JS

- []variables
- []functions
- []strings
- []if-statements
- []objects
- []arrays
- []loops

### Required HTML

- elements
- attributes
- class attribute

### What is react?

React is an external library(Code that is outside out computer) that helps us create websites easier

React can be used in websites and mobile apps

react.js -> Shared features
react-dom.js -> Features specific to websites
react-native.js -> Features specific to mobile
babel.js -> JavaScript compiler - translate other languages into JavaScript, JSX to JavaScript

JSX -> JavaScript XML, same as javascript, but we can write HTML directly in our JavaScript code

JSX is more stricter than normal HTML

## 2. Components, Props, Start the Chatbot project

[chatbot](https://supersimple.dev/projects/chatbot/)

components -> a piece of website

its better to split up the website into pieces so we can work on a small piece of the website at a time

component name must start with a capital letter

component syntax

instead of {Component()} we can do `<Component />` or `<Component></Component>`

### Fragment

- `<></>`
- doesn't add extra element in dom
- group elements together, without creating an extra `<div>`

### Props

every component receive a props **object** that contains the attributes of component

they are attribute to out component and parameter in function

each element should have a different key in list for react to recognise

```js
      const ChatMessageComponents = chatMessages.map((data, index) => {

        // we don't need "" to attribute if are assigning dynamic value
        // const { message, sender } = data;
        // return (
        //   <ChatMessage 
        //     message={message}
        //     sender={sender}
        //   />
        // );

        // if both the property and data member are same we can just mention the data member but only boolean values are considered
        // const { message, sender } = data;
        // return (
        //   <ChatMessage message sender />
        // );

        // if we are passing whole object and property name are same we can just send the whole object
        return (
          <ChatMessage {...data} key={index} />
        );
      });
```

### Conditional rendering (if inside JSX)

we can not use if directly in jsx{} instead we use guard operator`&&`

```js
const result = value1 && value2;
// if value1 is true the result will be value2;
// else result will be false; 
```

```js
{condition && components}
{condition: component1 ? component2}
```

to split code in multiple use () as wrapper

## 3. State, Event Handlers, Create the Chatbot Features

### Looping on data and rendering elements

- react can directly render list of components
- we can not use for loop in JSX
- we use .map() to iterate and return a components

### State

- make our website interactive
- state = data that is connected to the HTML
- when we update this data it will automatically update the html
- to convert data to state we use React.useState()

#### React.useState()

- returns [readOnlydata, writeDataFun() an updater function];

```js
const [value, setValue] = React.useState("");
```

- updater function updates whole data, as data is immutable in react which makes more efficient
- copying generally done by spread operator`...`

```js
setValue([...old, value]);
```

### Event handlers

- pass handlers(functions) as value to that onEvent(onClick) props not like `onClick={handler()}` this is wrong `onClick={handler}`
- event - onEvent(camalCase)
- do not use the DOM manually

### Lifting state up

- if sibling component need to share data, we lift the state to parent, then both can share state through parent

### Controlled input

- value={state}
- after usecase use setValue
- a two way binding

### Multiple update in single function

- State does not update immediately
- State is updated after all of the code is finished

```js
setValue([...value, "value1"]);
console.log(value); // gives old data
setValue([...value, "value2"]);
console.log(value); // gives old data, but schedules update of value2, but value1 is lost
```

```js
// fix
setValue((value) => {
    return [...value, "value1"];
});
```

## 4. CSS with React, Hooks, Finish Chatbot Project

### CSS ???

- we can not use class attribute in react instead use className
- conditional classes with {cond && value} or {cond ? v1 : v2}

### Hooks

insert react features into our components

every hook start with use

put hooks at the top

hooks should not e inside anything like if or function

- useState - automatically update html when data changes

- useEffect - runs the code when component is created or updated
- take a dependency array (best practice)
- if passed empty array run only once

- useRef - automatically refer an HTML element from the components
- ref - attribute used to add reference with the return value of useRef

`containerElem.scrollTop = containerElem.scrollHeight;` ??

## 5. Proper React setup

- terminal commands - `learn/terminal`
- node notes - `learn/node`

- node - lets us run javascript code outside of the browser
- npm - node package manager (used to install external library)
- some packages also add a command to our command line
  - e.g. create-vite - helps us setup react project

1. Install the create-vite package.
2. Create a new react project with create-vite.
    - npx - execute package without installing globally
3. `npx create-vite@6.5.0 my-react-app`(preferred)/ `npm create vite@6.5.0 my-react-app`
    - @6.5.0 - specify version
    - @latest - latest version
4. answer the questions
5. `cd my-react-app`
6. `npm install` - install all the dependencies mentioned in package.json
7. `npm run dev` - run the development server
8. open `http://localhost:5173/` in browser

- node_modules - all the installed packages
- src - source code
  - .jsx - react component file
  - src/assets - static files like images, css that are imported in code
- public - files that are directly served
- .gitignore - files and folders to ignore in git
- eslint.config.cjs - highlight errors in code, need eslint extension in vscode
- / - main html file
- package.json - project information and dependencies
- package-lock.json - exact version of installed packages
- README.md - project readme file
- vite.config.js - configuration for vite dev server, vite - setup, build tool, and dev server
- vite imports any file from src or public automatically

- index.css - main css file
- App.css - css for App.jsx

- run - `npm run dev`
- build - `npm run build`
- preview - `npm run preview` ??

- eslint - `'react/prop-types': 'off'` - disable prop types checking

- `<StrictMode>` - helps us find potential problems in our code, only in development mode

- import images - `import img from './assets/image.png';` then use `<img src={img} />`

- relative path vs absolute path
  - relative - `./` or `../`
  - absolute - from src - `src/components/Component.jsx` -> `components/Component.jsx`
  - to enable absolute path add `jsconfig.json` file in root with

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

- separate components into different files for better organisation
- default export - `export default function Component() {}` - import without `{}`
- named export - `export function Component() {}`
- import with `{}`
- vite automatically add file extension while importing

## 6. React router, git, start the ecommerce project

- webpage - a single html file
- website - multiple webpages
- SPA - single page application - website with single html file but multiple views
- routing - switching between different views in SPA
- react-router-dom - external library for routing in react
- install - `npm install react-router-dom`
- setup routing in index.jsx with `BrowserRouter`
- define routes in App.jsx with `Routes` and `Route`
- `Route` props - path, element
- use `Link` component to link between routes instead of `<a>` tag
- use `useNavigate()` hook to navigate programmatically
- use `useParams()` hook to get route parameters
- git - version control system
- git commands - `learn/git`

- react uses className instead of class attribute
- react-router -> core routing library, for BrowserRouter and NativeRouter
- react-router-dom -> routing library for web apps for Link, Routes, Route
- react-router-native -> routing library for mobile apps

- Inclose the whole app with `<BrowserRouter>` in index.jsx
- In App.jsx use `<Routes>` to define all routes
- use `<Route path="" element={} />` to define each route
- use `<Link to="">` instead of `<a href="">` to link between routes
- a - full page reload, loses all state
- Link - prevents full page reload
- `<Outlet>` - placeholder to render the matched child route component
- `<NavLink>` - special link that adds active class to the link when we are on that route
- use `useNavigate()` hook to navigate programmatically

```js
const navigate = useNavigate();
navigate("/path");
```

- use `useParams()` hook to get route parameters

```js
const params = useParams();
console.log(params.id); // if route is /path/:id
```

- `<StrictMode>` - helps find potential problems in code, only in development mode

## 7. Backend, Data Fetching, Async Await

- loop over data and render components

```js
const ProductComponents = products.map((product) => {
    return (
        <ProductCard 
            key={product.id}
            {...product}
        />
    );
});
```

- use key attribute to help react identify each component uniquely

### Why we need backend?

- manage data/database
- expose API endpoints
- share data between multiple clients/multiple computers of same clients
- host website
- authentication

- localhost - used for development, points to our own computer
- backend server - computer that runs backend code and exposes API endpoints
- API endpoint - URL that exposes some data or functionality
- Data fetching - getting data from backend server
- useEffect - to run code when component is created or updated
- fetch() - built in function to make network requests
- we can not do console.log(fetch()) because fetch is asynchronous - it takes time to get data from server
- async/await - syntax to handle asynchronous code

```js
React.useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        setData(data);
    }
    fetchData();
}, []);
```

- response - response from server, it contains status code, headers, data, etc.
- response.json() - get json data from response, it is also asynchronous

### axios

- external library to make network requests
- easier to use than fetch

```js
import axios from "axios";
React.useEffect(() => {
    async function fetchData() {
        const response = await axios.get("https://api.example.com/data");
        setData(response.data);
    }
    fetchData();
}, []);
```

- we use useEffect with empty dependency array to run the code only once when component is created otherwise it will run on every update causing infinite loop

- useEffect cleanup function - to clean up resources when component is unmounted

```js
React.useEffect(() => {
    // setup code

    return () => {
        // cleanup code
    };
}, []); // empty dependency array to run only once
```

- strictMode - runs useEffect twice in development mode to help find potential problems

- API - Application Programming Interface, a way for different software to communicate with each other
- REST API - Representational State Transfer, a type of API that uses HTTP requests to access and manipulate data
- HTTP methods - GET, POST, PUT, DELETE
- url contains protocol(http/https), domain, path, query parameters
- protocol - http or https
- subdomain - optional, e.g. www, api, blog, etc
- domain - server address
- path - specific resource on server
- query parameters - additional data sent to server

- we use useEffact with useState to fetch data from backend and store it in state so that it can be rendered in the component

- list.reduce() - to reduce an array to a single value
- list.map() - to transform each element in an array (e.g. render components)
- list.filter() - to filter elements in an array based on a condition
- list.find() - to find a single element in an array based on a condition
- for (const item of list) {} - to iterate over each element in an array

- we can set base url in axios to avoid repeating it

```js
axios.defaults.baseURL = "http://localhost:3000/api";
```

- or using vite using server proxy

```js
// vite.config.js
export default defineConfig({
  ...,
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      },
      'images': {
        target: 'http://localhost:3000'
      }
    }
  }
});
```

- `<base href="/">` - set base url for all relative paths in html

## 8. Data Mutation, Types of Requests

- Data mutation - changing data on the server
- HTTP methods for data mutation - POST, PUT, DELETE, PATCH

- Backend - manage the data
- Frontend - present the data

- if need more attributes use `<Fragment></Fragment>` instead of `<></>` e.g. key attribute

- we can not use async directly in useEffect function because it returns a promise instead of cleanup function

- GET - get data from server
- POST - create new data on server
- PUT - update existing data on server
- DELETE - delete data from server
- PATCH - partially update existing data on server
- idempotent - same request can be made multiple times with same result
  - GET, PUT, DELETE are idempotent
  - POST is not idempotent
- safe - request does not change data on server
  - GET is safe
  - POST, PUT, DELETE are not safe
- status codes
  - 200 - OK
  - 201 - Created
  - 400 - Bad Request
  - 401 - Unauthorized
  - 403 - Forbidden
  - 404 - Not Found
  - 500 - Internal Server Error

- controlled input - input element where value is controlled by react state
- optimistic ui update - update ui immediately before server responds for better user experience

```js
setItems((items) => [...items, newItem]); // optimistic update
await axios.post("/api/items", newItem);
```

### axios methods

- axios.get(url) - GET request, returns response, response.data contains data, response.status contains status code
- axios.post(url, data) - POST request, data is sent in request body, returns response
- axios.put(url, data) - PUT request, data is sent in request body, returns response
- axios.delete(url) - DELETE request, returns response

- every request has a type - GET, POST, PUT, DELETE, and url
- uri - uniform resource identifier, path of the resource on server
- url - uniform resource locator, complete address of the resource on server

- useEffect dependency array - to specify when to run the effect
- useNavigate - hook to navigate programmatically

```js
const navigate = useNavigate();
navigate("/path");
```

## 9. Automated Tests in React with Vitest

- automated tests - code that tests other code automatically
- unit tests - test individual units of code (functions, components)
- integration tests - test how different units of code work together
- end-to-end tests - test the entire application from start to finish
- test runner - tool that runs the tests and reports the results
- jest - popular test runner for react
- vitest - testing framework for react
- install - `npm install --save-dev vitest`
- other istallations - `npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom`
- @testing-library/react - library to test react components
- @testing-library/jest-dom - library to add custom matchers for jest
- @testing-library/user-event - library to simulate user events
- jsdom - javascript implementation of the DOM and HTML standards, used to run tests in node
- `--save-dev` - install package as dev dependency, i.e. only needed during development
- test file - file that contains tests, usually named `*.test.js` or `*.spec.js`
- `npx vitest` - run tests
- add test script in package.json - `"test": "vitest"`
- vitest.config.js - configuration file for vitest
- vitest setup file - file that runs before all tests, used to setup global variables and configurations
- `it` - function to define a test case
- `describe` - function to group related test cases - test suite
- `expect` - function to make assertions about the code being tested, used for functions
- `render` - function to render react components in tests, used for components
- `screen` - object that contains methods to query the rendered components
- `userEvent` - object that contains methods to simulate user events
- mocking or stubbing - creating fake versions of functions or modules for testing purposes
- `vi.fn()` - function to create a mock function
- `vi.mock()` - function to mock a module
- **mock implementation** - custom implementation of a mock function
- test coverage - measure of how much of the code is tested by the tests
- `<Link />` - in vitest we need to wrap components with MemoryRouter for routing to work
- `--coverage` - flag to generate test coverage report
- snapshot testing - test that compares the rendered output of a component to a saved snapshot
- `toMatchSnapshot()` - matcher to compare rendered output to snapshot
- do not contact real backend in tests, use mocking instead, because tests should be fast and reliable and not depend on external factors and backend may not be available or may have different data or it may alter real data
- beforeEach() - function to run code before each test case, because each test should be independent, so we reset the state before each test

## 10. Deploy React to the Internet, Intro to AWS

- AWS - Amazon Web Services, cloud computing platform by Amazon
- EC2 - Elastic Compute Cloud, virtual servers in the cloud
- Elastic Beanstalk - platform as a service, easy to deploy and manage applications
- S3 - Simple Storage Service, object storage service, used for static website hosting
- Route 53 - domain name service, used to manage domain names
- Load Balancer - distributes incoming traffic across multiple servers
- vite build - `npm run build` - creates production ready build in dist folder
- deploy - process of making the website available on the internet
- static hosting - hosting service that serves static fil

## 11. React 19

- react-helmet gone, instead directly add meta tags in the component using react
- new jsx transform - no need to import react in every file
- ref is now normal but special attribute
- useId() - hook to generate unique id for components
- don't need useMemo, useCallback, memo anymore, react automatically optimizes
- instead of PropTypes use TypeScript
- instead of DefaultProps use default parameters in function

- React Compiler - new compiler that optimizes react code
- `npm install --save-dev babel-plugin-react-compiler@rc` - install react compiler

- react devtools - browser extension to debug react applications

- .tsx - react component file with typescript
- .jsx - react component file with javascript

- typescript - superset of javascript that adds static types
- types - definitions for variables, function parameters, return types, etc.
- static types - types that are checked at compile time

## Extra. Authentication, Protected Routes, Finish Ecommerce Project

- authentication - process of verifying identity of user
- authorization - process of verifying if user has permission to access resource
- protected routes - routes that require authentication to access
- JWT - JSON Web Token, a token that contains user information and is used for authentication
- localStorage - browser storage to store data persistently
- sessionStorage - browser storage to store data for a session
- cookies - small pieces of data stored in browser, sent with every request to server
- HTTP headers - additional information sent with request or response
- Authorization header - header used to send authentication token to server
- Bearer token - token sent in Authorization header

```js
// authentication
const response = await axios.post("/api/login", { username, password });
const token = response.data.token;

// store token in localStorage
localStorage.setItem("token", token);

// set Authorization header for all requests
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
```

## Question

- DOM ???
- idea !!! portfolio as chatbot where bot will tell information about me
- relative vs obsulate path

### Extra

crpto.randomUUID() -> create a unique id
