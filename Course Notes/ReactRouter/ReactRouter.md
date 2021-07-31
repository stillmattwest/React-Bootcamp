## React Router

Routing can kind of be faked without using any libraries, by having some sort of nav button change a piece of state, and having logic in our render method (or available to render) that will show certain components based on what state was changed to.

That's no bueno, however.

- The URL never changes
- No browser 'back' button
- No bookmarking possible

## Enter React Router

React Router provides real client-side routing by mapping a URL from the navigation bar to client-side content.

React Router is not the only tool for accomplishing this, but it is the most popular tool.

## Installing React Router

React Router is available as part of a package called **react-router-dom** and we can install it via NPM.

```console
npm install --save react-router-dom
```

then wrap the App render with a **BrowserRouter** component.

```javascript
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

Then, we need to do some work in App.js. We'll need to import _Route_ from react-router-dom and we'll need to map the route in a URL to a specific component.

```javascript
import { Route } from 'react-router-dom';
import myComponent from 'my-component-path';
//... more imports
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path='/myPath' component={myComponent} />
      </div>
    );
  }
}

export default App;
```
