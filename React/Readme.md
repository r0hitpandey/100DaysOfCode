# React
What is react used for?
React js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.
It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

This folder contains daily learning.

>### Creating React App:
       
* By installing npm
* By using npx

```bash
npm install -g create-react-app

npx create-react-app app-name
```
>### JSX
It is a tag syntax in 'app.js' where all the code is written (HTML, CSS, JS)

>### variables 
* declaration of variable is same as JavaScript.
* We use variables inside JSX by wrapping it in curly braces {}

```bash
let name = "Robin";

<h1>Hello! {name}</h1>
```

* We can put any valid JavaScript expression

>### Adding web components
Here we added bootstrap to our react app 
* added css of Bootstrap
* added javaScript of Bootstrap
to its 'index.html' file

```bash
<!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    
<!-- Bootstrap js -->
script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    
```
> ###Adding React Component
we create React component by creating seperate .js file and adding the component function. 

```bash
import react from 'react'
export default function Navbar() {
    return (
);
```

>### Props and PropsTypes
* props are basically artibitary inputs to your component fuction
* propTypes is the type of input you want user to provide (string, number etc.)

```bash
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
);
```

*When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

```bash
// in component file 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// in app.js file
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
